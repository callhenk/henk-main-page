import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const ConversationalAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Get agent ID from environment variable
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;

  useEffect(() => {
    // Load the ElevenLabs widget script
    if (!document.querySelector('script[src*="convai-widget-embed"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      script.onload = () => {
        setIsScriptLoaded(true);
        console.log("ElevenLabs widget script loaded");
      };
      script.onerror = () => {
        console.error("Failed to load ElevenLabs widget script");
      };
      document.head.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  if (!agentId) {
    console.warn("ElevenLabs Agent ID not configured");
    return null;
  }

  return (
    <>
      {/* Floating Button - Only show when widget is closed */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 bg-white hover:bg-gray-50 text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
          </button>
        </motion.div>
      )}

      {/* Agent Widget Container */}
      <AnimatePresence>
        {isOpen && isScriptLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50"
            style={{ width: "400px", height: "600px" }}
          >
            <elevenlabs-convai
              agent-id={agentId}
              variant="full"
              avatar-orb-color-1="#4D9CFF"
              avatar-orb-color-2="#9CE6E6"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConversationalAgent;
