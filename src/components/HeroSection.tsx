import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden pt-16 lg:pt-0 lg:flex lg:items-center">
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/8 rounded-full blur-3xl"
        animate={{
          opacity: [0.08, 0.2, 0.08],
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Film Grain Effect */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '200px 200px'],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.15] tracking-tight">
                Henk is an AI voice agent
                <br />
                <span className="text-gray-600">that automates stewardship</span>
                <br />
                <span className="text-gray-600">and fundraising calls for charities</span>
              </h1>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://app.callhenk.com/self-onboard-demo",
                      "_blank"
                    )
                  }
                >
                  Try Henk Now
                </Button>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-sm text-gray-700 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                  <span>No setup fees</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-sm text-gray-700 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                  <span>24/7 operations</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-sm text-gray-700 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                  <span>Secure & encrypted</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          >
            {/* Card Container */}
            <motion.div
              ref={mediaRef}
              style={{ y: yParallax }}
              className="relative overflow-hidden rounded-[32px] shadow-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 will-change-transform p-3"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative aspect-video w-full rounded-[24px] overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1NljA6FHKI1Bzb9F2MDB-Q9skfFpA1day/preview"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  title="Henk Demo Video"
                />
              </div>
            </motion.div>

            {/* Floating badges - cleaner capsule style */}
            <motion.div
              className="hidden lg:block absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Live Calls
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.2 }}
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
