import { useEffect, useState } from "react";
import "../styles/elevenlabs-custom.css";

// Extend JSX to include the custom elevenlabs-convai element
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "agent-id"?: string;
          "signed-url"?: string;
          variant?: "full" | "expandable";
          "avatar-orb-color-1"?: string;
          "avatar-orb-color-2"?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface ElevenLabsAgentProps {
  agentId?: string;
  signedUrl?: string;
  height?: string;
  width?: string;
  useBackendAuth?: boolean; // Use backend authentication
  backendUrl?: string; // Backend URL (default: http://localhost:3000)
}

const ElevenLabsAgent = ({
  agentId,
  signedUrl,
  height = "600px",
  width = "100%",
  useBackendAuth = false,
  backendUrl = "http://localhost:3000"
}: ElevenLabsAgentProps) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [currentAgentId, setCurrentAgentId] = useState<string | undefined>(agentId);
  const [loading, setLoading] = useState(useBackendAuth);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load the ElevenLabs widget script
    if (!document.querySelector('script[src*="convai-widget-embed"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      script.onload = () => {
        setIsScriptLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load ElevenLabs widget script");
        setError("Failed to load conversation widget");
      };
      document.head.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  // Inject styles into Shadow DOM to hide branding
  useEffect(() => {
    if (!isScriptLoaded) return;

    const hideBranding = () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (!widget || !widget.shadowRoot) {
        // Retry if widget isn't ready yet
        setTimeout(hideBranding, 100);
        return;
      }

      // Inject custom styles into Shadow DOM
      const style = document.createElement('style');
      style.textContent = `
        /* Hide all branding elements */
        a[href*="elevenlabs"],
        [class*="powered"],
        [class*="branding"],
        [class*="footer"],
        footer,
        .footer,
        a:has-text("ElevenLabs"),
        div:has-text("Powered by"),
        span:has-text("Powered by"),
        p:has-text("Powered by") {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          max-height: 0 !important;
          overflow: hidden !important;
          position: absolute !important;
          left: -9999px !important;
        }

        /* Target common footer/branding selectors */
        *[class*="attribution"],
        *[class*="powered-by"],
        *[class*="credits"],
        *[data-testid*="footer"],
        *[data-testid*="branding"] {
          display: none !important;
        }
      `;

      widget.shadowRoot.appendChild(style);

      // Also try to remove any elements containing "Powered by" text
      const removeElementsWithText = (root: ShadowRoot | Document) => {
        const allElements = root.querySelectorAll('*');
        allElements.forEach((el) => {
          const text = el.textContent?.toLowerCase() || '';
          if (
            text.includes('powered by') ||
            text.includes('elevenlabs') ||
            el.tagName === 'FOOTER'
          ) {
            (el as HTMLElement).style.display = 'none';
            (el as HTMLElement).style.visibility = 'hidden';
            (el as HTMLElement).style.opacity = '0';
            (el as HTMLElement).style.height = '0';
            (el as HTMLElement).style.overflow = 'hidden';
            (el as HTMLElement).remove();
          }
        });
      };

      // Run immediately and observe for changes
      removeElementsWithText(widget.shadowRoot);

      // Create observer to catch dynamically added branding
      const observer = new MutationObserver(() => {
        removeElementsWithText(widget.shadowRoot!);
      });

      observer.observe(widget.shadowRoot, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    };

    // Start hiding branding after widget loads
    const timeout = setTimeout(hideBranding, 500);
    return () => clearTimeout(timeout);
  }, [isScriptLoaded]);

  // Validate agent access from backend if using authentication
  useEffect(() => {
    const validateAgent = async () => {
      if (!useBackendAuth || !agentId) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${backendUrl}/api/grants/conversation/start`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ agent_id: agentId })
        });

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Failed to validate agent');
        }

        // Agent is valid, use it
        setCurrentAgentId(data.agent_id);
      } catch (err) {
        console.error('Failed to validate agent:', err);
        setError(err instanceof Error ? err.message : 'Failed to validate agent access');
      } finally {
        setLoading(false);
      }
    };

    validateAgent();
  }, [useBackendAuth, agentId, backendUrl]);

  if (error) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="relative w-full max-w-2xl">
          <div className="bg-red-50 backdrop-blur-xl rounded-3xl shadow-2xl border border-red-200 p-8">
            <div className="text-center">
              <div className="text-red-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unable to start conversation</h3>
              <p className="text-gray-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentAgentId && !signedUrl) {
    console.warn("ElevenLabs Agent ID or signed URL not provided");
    return null;
  }

  return (
    <div className="w-full flex justify-center items-center">
      {isScriptLoaded && !loading ? (
        <div className="relative w-full max-w-2xl">
          {/* Custom branded container */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="relative z-10 text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-3xl mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Grant Application Assistant</h3>
              <p className="text-gray-600">Start a conversation to apply for our grant program</p>
            </div>

            {/* Widget container with custom styling */}
            <div
              className="relative z-10 elevenlabs-widget-container bg-white/50 rounded-2xl"
              style={{ minHeight: "600px", height: "600px" }}
            >
              <style>{`
                /* Custom widget styling */
                .elevenlabs-widget-container elevenlabs-convai {
                  --primary-color: #3B82F6;
                  --secondary-color: #60A5FA;
                  --background-color: rgba(255, 255, 255, 0.8);
                  --text-color: #1F2937;
                  --border-radius: 1rem;
                  font-family: inherit;
                }

                .elevenlabs-widget-container {
                  position: relative;
                  overflow: visible !important;
                }

                /* Ensure widget content is visible */
                .elevenlabs-widget-container elevenlabs-convai,
                .elevenlabs-widget-container elevenlabs-convai * {
                  visibility: visible !important;
                  opacity: 1 !important;
                }
              `}</style>
              <elevenlabs-convai
                agent-id={currentAgentId}
                signed-url={signedUrl}
                variant="full"
                avatar-orb-color-1="#3B82F6"
                avatar-orb-color-2="#60A5FA"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
              {/* Overlay to hide bottom branding - positioned at very bottom only */}
              <div
                className="absolute left-0 right-0 bg-white/95 pointer-events-none z-50"
                style={{
                  bottom: "0",
                  height: "40px",
                  borderBottomLeftRadius: "1rem",
                  borderBottomRightRadius: "1rem"
                }}
              ></div>
            </div>

            {/* Custom footer */}
            <div className="relative z-10 mt-6 text-center">
              <p className="text-sm text-gray-500">Powered by Henk AI • Secure & Confidential</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex items-center justify-center bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
          style={{ width, height, maxWidth: "800px" }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-700">
              {loading ? 'Validating access...' : 'Loading agent...'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElevenLabsAgent;
