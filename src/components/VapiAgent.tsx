import { useCallback, useState } from "react";
import { useConversation } from "@elevenlabs/react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Loader2 } from "lucide-react";

type CallStatus = "idle" | "loading" | "active" | "speaking" | "listening" | "ending" | "ended" | "error";

interface VapiAgentProps {
  agentId: string;
}

const VapiAgent: React.FC<VapiAgentProps> = ({ agentId }) => {
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("Click to start your application");
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      setCallStatus("active");
      setStatusMessage("Connected! Henk is ready to talk...");
      setError(null);
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      setCallStatus("ended");
      setStatusMessage("Application complete. Thank you!");
      setTimeout(() => {
        setCallStatus("idle");
        setStatusMessage("Click to start your application");
      }, 3000);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      setError(error.message || "An error occurred during the call");
      setCallStatus("error");
      setStatusMessage("Error occurred. Please try again.");
      setTimeout(() => {
        setCallStatus("idle");
        setStatusMessage("Click to start your application");
        setError(null);
      }, 5000);
    },
    onMessage: (message) => {
      console.log('ElevenLabs message:', message);

      // Handle mode changes if the message contains mode information
      if (message.type === 'agent_response') {
        setCallStatus("speaking");
        setStatusMessage("Henk is speaking...");
      } else if (message.type === 'user_transcript') {
        setCallStatus("listening");
        setStatusMessage("Listening to you...");
      }
    },
  });

  const startCall = useCallback(async () => {
    if (callStatus === "active" || callStatus === "loading") {
      return;
    }

    try {
      setCallStatus("loading");
      setStatusMessage("Requesting microphone access...");
      setError(null);

      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      setStatusMessage("Connecting to Henk...");

      // Start the conversation
      await conversation.startSession({
        agentId: agentId,
      });

      console.log("Conversation started with agent ID:", agentId);
    } catch (err: any) {
      console.error("Failed to start call:", err);

      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setError("Microphone access denied. Please allow microphone access and try again.");
      } else {
        setError(err.message || "Failed to start call. Please try again.");
      }

      setCallStatus("error");
      setTimeout(() => {
        setCallStatus("idle");
        setStatusMessage("Click to start your application");
        setError(null);
      }, 5000);
    }
  }, [conversation, callStatus, agentId]);

  const endCall = useCallback(async () => {
    try {
      setCallStatus("ending");
      setStatusMessage("Ending call...");
      await conversation.endSession();
    } catch (err) {
      console.error("Failed to end call:", err);
      setCallStatus("idle");
      setStatusMessage("Click to start your application");
    }
  }, [conversation]);

  // Get button styling based on status
  const getButtonStyle = () => {
    if (callStatus === "active" || callStatus === "speaking" || callStatus === "listening") {
      return "bg-red-500 hover:bg-red-600 animate-pulse";
    }
    if (callStatus === "loading" || callStatus === "ending") {
      return "bg-gray-500 cursor-not-allowed";
    }
    if (callStatus === "error") {
      return "bg-orange-500 hover:bg-orange-600";
    }
    return "bg-blue-500 hover:bg-blue-600";
  };

  const isCallActive = callStatus === "active" || callStatus === "speaking" || callStatus === "listening";
  const isLoading = callStatus === "loading" || callStatus === "ending";

  return (
    <div className="w-full">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
        {/* Visual Status Indicator */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          <div className={`
            w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300
            ${isCallActive ? 'bg-green-500/20 border-4 border-green-500 animate-pulse' : 'bg-white/5 border-2 border-white/20'}
          `}>
            {isLoading ? (
              <Loader2 className="w-16 h-16 text-white animate-spin" />
            ) : isCallActive ? (
              <Mic className="w-16 h-16 text-green-500" />
            ) : (
              <MicOff className="w-16 h-16 text-white/50" />
            )}
          </div>

          {/* Status Message */}
          <div className="text-center">
            <p className="text-xl font-semibold text-white mb-2">
              {statusMessage}
            </p>
            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 px-4 py-2 rounded-lg">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Call Control Button */}
        <div className="flex flex-col items-center space-y-4">
          <Button
            size="lg"
            onClick={isCallActive ? endCall : startCall}
            disabled={isLoading}
            className={`
              ${getButtonStyle()}
              text-white font-semibold rounded-xl px-12 py-6 text-lg
              shadow-2xl transform transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              ${!isLoading && 'hover:scale-105'}
            `}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {callStatus === "loading" ? "Connecting..." : "Ending..."}
              </>
            ) : isCallActive ? (
              <>
                <MicOff className="w-5 h-5 mr-2" />
                End Call
              </>
            ) : (
              <>
                <Mic className="w-5 h-5 mr-2" />
                Start Application
              </>
            )}
          </Button>

          {/* Helper Text */}
          <div className="text-center max-w-md">
            <p className="text-sm text-gray-300">
              {isCallActive ? (
                "Speak clearly and naturally. Henk will guide you through the application."
              ) : (
                "Click the button above to begin your voice application. Make sure your microphone is enabled."
              )}
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-2xl font-bold text-white">3-5</p>
            <p className="text-sm text-gray-300">minutes</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-sm text-gray-300">secure</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-sm text-gray-300">available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VapiAgent;
