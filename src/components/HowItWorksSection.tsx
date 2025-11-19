import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload Your Donor List",
    description:
      "Securely upload your donor database with contact information and preferences. Our system automatically validates and optimizes the data.",
    accent: "Upload",
  },
  {
    number: "02",
    title: "Customize Your Campaign",
    description:
      "Set your fundraising goals, customize conversation scripts, and define donor segments. Henk adapts to your charity's unique voice and mission.",
    accent: "Customize",
  },
  {
    number: "03",
    title: "Henk Makes the Calls",
    description:
      "Our AI agent begins calling donors using natural conversation flows, handling objections, and adapting to each individual's preferences in real-time.",
    accent: "Call",
  },
  {
    number: "04",
    title: "Track & Optimize",
    description:
      "Monitor real-time results through our dashboard. Henk learns from each call to continuously improve conversion rates and donor satisfaction.",
    accent: "Optimize",
  },
];

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 md:mb-28">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="sticky top-32">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider rounded-full">
                Process
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                How it works
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
              Get your AI fundraising campaign running in four simple steps. No technical expertise required.
            </p>
          </motion.div>
        </div>

        {/* Steps - Zigzag staggered layout */}
        <div ref={ref} className="space-y-16 md:space-y-24 mb-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {/* Number - Large and decorative */}
                <div
                  className={`lg:col-span-5 relative ${
                    isEven ? "" : "lg:col-start-8"
                  }`}
                >
                  <motion.div
                    className="relative"
                    whileHover={{
                      rotate: isEven ? -3 : 3,
                      scale: 1.02
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Background shape - always visible with stronger styling */}
                    <div
                      className={`rounded-[40px] transform ${
                        isEven ? "rotate-3" : "-rotate-3"
                      } shadow-lg border border-blue-100`}
                      style={{
                        background: index % 2 === 0
                          ? "linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)"
                          : "linear-gradient(135deg, #E0E7FF 0%, #EEF2FF 100%)",
                      }}
                    >
                      <div className="p-12 md:p-16">
                        <div className="text-[140px] md:text-[180px] lg:text-[220px] font-bold leading-none bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                          {step.number}
                        </div>
                        <div className="mt-4 text-2xl md:text-3xl font-bold text-blue-600 tracking-tight">
                          {step.accent}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "" : "lg:col-start-1 lg:row-start-1"
                  }`}
                >
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-3 pt-4">
                      <div className="flex items-center gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${
                              i <= index ? "w-12 bg-blue-600" : "w-8 bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 font-medium">
                        Step {index + 1} of 4
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connecting arrow (not for last step) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block lg:col-span-12 py-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <div className={`flex items-center ${isEven ? "justify-end" : "justify-start"} gap-3`}>
                      <div className={`h-px w-20 bg-gradient-to-r ${isEven ? "from-transparent to-blue-300" : "from-blue-300 to-transparent"}`} />
                      <ArrowRight className="w-6 h-6 text-blue-400" strokeWidth={2} />
                      <div className={`h-px w-20 bg-gradient-to-r ${isEven ? "from-blue-300 to-transparent" : "from-transparent to-blue-300"}`} />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA with stats */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-10" />

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to transform your fundraising?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join charities already using Henk to reach more donors and raise more funds
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">&lt;30min</div>
                  <div className="text-sm text-gray-400">Setup time</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Operations</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400">Secure</div>
                </div>
              </div>

              <motion.button
                className="bg-white text-gray-900 px-12 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open("https://app.callhenk.com/self-onboard-demo", "_blank")
                }
              >
                Try Henk Now →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
