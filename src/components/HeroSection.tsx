import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-voice-ai.jpg";
import homepageImage from "@/assets/homepage.png";
import VideoModal from "./VideoModal";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-100">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    AI-Powered Voice Fundraising
                  </div>
                  <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                    Meet <span className="text-white">Henk</span>,
                    <br />
                    Your AI Fundraising
                    <br />
                    <span className="text-white">Champion</span>
                  </h1>
                  <motion.p
                    className="text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    Henk hears & helps. Let your organization focus on impact
                    while Henk answers every call with heart.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl px-8 py-4 text-lg shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/jerome-callhenk/30min",
                        "_blank"
                      )
                    }
                  >
                    💬 See Henk in Action
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg backdrop-blur-sm"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    Watch Demo
                  </Button>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-8 text-sm text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>24/7 operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>GDPR compliant</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200/20"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={homepageImage}
                  alt="Henk AI Platform Interface"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </motion.div>

              {/* Floating elements to show platform features */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Live Calls
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    AI Agent
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
