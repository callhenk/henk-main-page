import { useRef, useState, useEffect } from "react";
import { useConversation } from "@elevenlabs/react";
import { Phone, PhoneOff, Mic, MicOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GrantChatProps {
  agentId?: string;
  backendUrl?: string;
}

const GrantChat = ({
  agentId = "agent_7801kab1amnaerrra15pnxw5t2er",
  backendUrl = import.meta.env.VITE_BACKEND_URL || "https://app.callhenk.com"
}: GrantChatProps) => {
  // Secure signed URL flow:
  // 1. Frontend requests signed URL from backend (never exposes API key)
  // 2. Backend calls ElevenLabs API with proper authentication
  // 3. Backend returns signed URL to frontend
  // 4. Frontend uses signed URL to establish secure WebSocket connection
  //
  // This ensures the ELEVENLABS_API_KEY remains server-side only
  const [validatedAgentId] = useState<string | null>(agentId);
  const [isValidating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [connectionTime, setConnectionTime] = useState<Date | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize ElevenLabs React SDK
  const conversation = useConversation({
    onConnect: () => {
      setIsConnected(true);
      setIsCalling(false);
      setConnectionTime(new Date());

      // Get conversation ID from the SDK
      const conversationId = conversation.getId();

      // Send notification that conversation started
      fetch(`${backendUrl}/api/grants/conversation-started`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: validatedAgentId,
          conversation_id: conversationId,
          metadata: {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            locale: navigator.language,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          },
        }),
      }).catch(err => {
        // Don't fail the conversation if notification fails
        console.error('Failed to send conversation notification:', err);
      });

      // Stop calling sound when connected (if audio is enabled)
      // if (audioRef.current) {
      //   audioRef.current.pause();
      //   audioRef.current.currentTime = 0;
      // }
    },
    onDisconnect: () => {
      setIsConnected(false);
      setIsCalling(false);
      setConnectionTime(null);
      setIsAgentSpeaking(false);
      // Stop calling sound when disconnected (if audio is enabled)
      // if (audioRef.current) {
      //   audioRef.current.pause();
      //   audioRef.current.currentTime = 0;
      // }
    },
    onMessage: (message: unknown) => {
      let messageText = "";
      if (typeof message === "string") {
        messageText = message;
      } else if (message && typeof message === "object" && "message" in message) {
        messageText = String((message as { message: unknown }).message);
      }

      if (messageText.trim()) {
        setIsAgentSpeaking(true);
        setTimeout(() => setIsAgentSpeaking(false), 3000);
      }
    },
    onError: (error) => {
      console.error("ElevenLabs connection error:", error);
      setError(typeof error === "string" ? error : String(error));
    },
  });

  // COMMENTED OUT: Backend validation endpoint
  // This was removed because the endpoint currently just passes through the agent_id
  // without any validation, authentication, or database operations.
  //
  // To re-enable backend validation, uncomment this block and ensure the backend
  // endpoint at /api/grants/conversation/start is running.
  //
  // useEffect(() => {
  //   const validateAgent = async () => {
  //     try {
  //       const response = await fetch(`${backendUrl}/api/grants/conversation/start`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         body: JSON.stringify({ agent_id: agentId }),
  //       });
  //
  //       const data = await response.json();
  //
  //       if (!data.success) {
  //         throw new Error(data.error || "Failed to validate agent");
  //       }
  //
  //       setValidatedAgentId(data.agent_id);
  //     } catch (err) {
  //       console.error("Failed to validate agent:", err);
  //       setError(err instanceof Error ? err.message : "Failed to start conversation");
  //     } finally {
  //       setIsValidating(false);
  //     }
  //   };
  //
  //   validateAgent();
  // }, [agentId, backendUrl]);

  // Start conversation
  const startConversation = async () => {
    if (!validatedAgentId) return;

    try {
      setIsCalling(true);

      // Play calling sound while connecting (if audio is enabled)
      // if (audioRef.current) {
      //   audioRef.current.loop = true;
      //   audioRef.current.play().catch(console.error);
      // }

      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Get signed URL from secure backend endpoint
      const response = await fetch(
        `${backendUrl}/api/grants/signed-url?agent_id=${validatedAgentId}`
      );

      if (!response.ok) {
        throw new Error('Failed to get signed URL from backend');
      }

      const data = await response.json();

      if (!data.success || !data.signed_url) {
        throw new Error(data.error || 'Failed to get signed URL');
      }

      await conversation.startSession({
        signedUrl: data.signed_url,
      });
    } catch (err) {
      console.error("Error starting conversation:", err);
      setError("Failed to start conversation. Please check microphone permissions.");
      setIsCalling(false);

      // Stop calling sound on error (if audio is enabled)
      // if (audioRef.current) {
      //   audioRef.current.pause();
      //   audioRef.current.currentTime = 0;
      // }
    }
  };

  // Stop conversation
  const stopConversation = async () => {
    try {
      await conversation.endSession();
      setIsCalling(false);

      // Stop calling sound when ending (if audio is enabled)
      // if (audioRef.current) {
      //   audioRef.current.pause();
      //   audioRef.current.currentTime = 0;
      // }
    } catch (err) {
      console.error("Error stopping conversation:", err);
    }
  };

  // Get connection duration
  const getConnectionDuration = () => {
    if (!connectionTime) return "0:00";
    const now = new Date();
    const diff = Math.floor((now.getTime() - connectionTime.getTime()) / 1000);
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (error && !validatedAgentId) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-red-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-red-300/50 p-8 sm:p-12 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-red-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-500 rounded-3xl shadow-2xl shadow-red-500/50 mx-auto">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Unable to start voice agent
              </h3>
              <p className="text-lg text-gray-700 max-w-md mx-auto">{error}</p>
            </div>
            <Button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-2xl shadow-xl shadow-red-500/30 transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Reload Page
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isValidating) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 p-12 sm:p-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="relative z-10 text-center space-y-8">
            <div className="relative inline-block">
              {/* Spinning outer ring */}
              <div className="absolute inset-0 rounded-3xl bg-blue-500 opacity-20 animate-ping" style={{ animationDuration: '2s' }}></div>
              {/* Inner container */}
              <div className="relative flex items-center justify-center w-24 h-24 bg-blue-500 rounded-3xl shadow-2xl shadow-blue-500/50">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Preparing Voice Agent
              </h3>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Please wait while we set up your secure conversation
              </p>

              {/* Loading dots */}
              <div className="flex justify-center space-x-2 pt-4">
                <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Hidden audio element for calling sound */}
      {/* COMMENTED OUT: calling.mp3 file doesn't exist yet */}
      {/* To enable: Add calling.mp3 to /public/sounds/ folder and uncomment below */}
      {/* <audio ref={audioRef} src="/sounds/calling.mp3" preload="auto" /> */}

      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 p-8 sm:p-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 space-y-8">
          {/* Agent Avatar */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Ripple effect when connected */}
                {isConnected && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                  </>
                )}

                {/* Main avatar circle */}
                <div
                  className={`flex items-center justify-center rounded-full border-4 transition-all duration-500 relative ${
                    isConnected
                      ? "bg-blue-500/20 border-blue-500 h-32 w-32 shadow-xl shadow-blue-500/50"
                      : isCalling
                        ? "bg-blue-400/10 border-blue-300 h-32 w-32 shadow-lg animate-pulse"
                        : "h-32 w-32 border-gray-300 bg-gray-50 shadow-md"
                  }`}
                >
                  {isConnected && isAgentSpeaking ? (
                    <div className="flex items-center justify-center space-x-1.5">
                      <div className="h-3 w-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0ms", animationDuration: '0.8s' }} />
                      <div className="h-5 w-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "150ms", animationDuration: '0.8s' }} />
                      <div className="h-7 w-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "300ms", animationDuration: '0.8s' }} />
                      <div className="h-5 w-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "450ms", animationDuration: '0.8s' }} />
                      <div className="h-3 w-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "600ms", animationDuration: '0.8s' }} />
                    </div>
                  ) : isCalling ? (
                    <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
                  ) : (
                    <Mic className={`h-12 w-12 transition-all duration-300 ${isConnected ? "text-blue-600 drop-shadow-lg" : "text-gray-400"}`} />
                  )}
                </div>

                {/* Connection status indicator */}
                {isConnected && (
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 shadow-lg ring-4 ring-white">
                    <div className="h-3 w-3 rounded-full bg-white animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {isCalling ? "Connecting..." : isConnected ? "Connected" : "Grant Application Assistant"}
              </h3>
              <p className={`text-lg transition-all duration-300 ${
                isConnected ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}>
                {isCalling
                  ? "Establishing secure connection..."
                  : isConnected
                    ? `Call duration: ${getConnectionDuration()}`
                    : "Start a voice conversation to apply for our grant program"}
              </p>
            </div>
          </div>

          {/* Status Messages */}
          {isConnected && isAgentSpeaking && (
            <div className="bg-blue-50 border-2 border-blue-300/50 rounded-2xl p-5 text-center shadow-md transform transition-all duration-300 animate-pulse">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <p className="text-sm text-blue-700 font-semibold">Agent is speaking...</p>
              </div>
            </div>
          )}

          {error && isConnected && (
            <div className="bg-red-50 border-2 border-red-300/50 rounded-2xl p-5 text-center shadow-md">
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Call Controls */}
          <div className="flex justify-center pt-6">
            {!isConnected ? (
              <Button
                onClick={startConversation}
                disabled={isCalling}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full w-20 h-20 shadow-2xl shadow-blue-500/50 transform hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg border-2 border-blue-400/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {isCalling ? (
                  <Loader2 className="w-10 h-10 animate-spin relative z-10" />
                ) : (
                  <Phone className="w-10 h-10 relative z-10" />
                )}
              </Button>
            ) : (
              <Button
                onClick={stopConversation}
                className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-full w-20 h-20 shadow-2xl shadow-red-500/50 transform hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-red-400/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <PhoneOff className="w-10 h-10 relative z-10" />
              </Button>
            )}
          </div>

          {/* Instructions */}
          {!isConnected && !isCalling && (
            <div className="text-center space-y-3 pt-2">
              <div className="inline-flex items-center space-x-2 bg-blue-50/80 backdrop-blur-sm px-5 py-3 rounded-full border border-blue-200/50 shadow-sm">
                <Mic className="w-4 h-4 text-blue-600" />
                <p className="text-sm text-blue-700 font-medium">Make sure your microphone is enabled</p>
              </div>
            </div>
          )}

          {/* Live indicator when connected */}
          {isConnected && (
            <div className="text-center pt-2">
              <div className="inline-flex items-center space-x-2 bg-green-50/80 backdrop-blur-sm px-5 py-3 rounded-full border border-green-200/50 shadow-sm">
                <div className="relative">
                  <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 h-2.5 w-2.5 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-sm text-green-700 font-semibold">LIVE</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p>Powered by Henk AI • Secure & Confidential</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantChat;
