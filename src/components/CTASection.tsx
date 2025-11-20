import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import VideoModal from "./VideoModal";

const CTASection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-gray-900/70 backdrop-blur-md relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 mt-5 md:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your Fundraising Results?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                See how you can use Henk to increase donations and build
                stronger donor relationships
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl px-8 py-4 text-lg shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://app.callhenk.com/self-onboard-demo",
                      "_blank"
                    )
                  }
                >
                  Try Demo Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/jerome-callhenk/30min",
                      "_blank"
                    )
                  }
                >
                  Book a Meeting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg backdrop-blur-sm"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  Watch Video
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur">
                <img
                  src="/agent-v2.png"
                  alt="Agent Dashboard Example"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              </div>
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

export default CTASection;
