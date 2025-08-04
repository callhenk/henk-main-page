import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden pt-20 lg:pt-0">
      <div className="container mx-auto px-6 relative z-10 mt-5 md:mt-0">
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
                <h1 className="text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-tight">
                  AI-powered voice agent that automates telephone fundraising for charities with natural conversations and 24/7 availability.
                </h1>
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
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.loom.com/embed/045ced1fc30d47b590eabd3d066fe828"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                  title="Henk Demo Video"
                />
              </div>
            </motion.div>

            {/* Floating elements to show platform features - hidden on mobile */}
            <motion.div
              className="hidden lg:block absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200 z-10"
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
              className="hidden lg:block absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200 z-10"
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
  );
};

export default HeroSection;
