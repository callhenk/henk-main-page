import { Check, Zap, TrendingDown, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const coreFeatures = [
  "Natural AI conversations",
  "24/7 automated calling",
  "Real-time analytics",
  "Custom script development",
  "Multi-campaign management",
  "Advanced CRM integration",
];

const advancedFeatures = [
  "Donor sentiment analysis",
  "Secure data encryption",
  "Conversation transcripts",
  "A/B testing capabilities",
  "Visual workflow builder",
  "Unlimited team members",
];

const benefits = [
  {
    icon: Zap,
    title: "No Setup Fees",
    description: "Get started instantly with zero upfront costs",
  },
  {
    icon: TrendingDown,
    title: "No Commitments",
    description: "Pay only for what you use, cancel anytime",
  },
  {
    icon: Shield,
    title: "All Features",
    description: "Full access to every feature from day one",
  },
];

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      id="pricing"
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider rounded-full">
            Simple Pricing
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pay Only for What You Use
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            No monthly fees, no tiers, no limits. Just simple per-minute pricing with access to all features.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Main Pricing Card - Large */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[40px] transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-white rounded-[40px] p-10 md:p-12 shadow-2xl border border-gray-200/50 h-full flex flex-col">
                {/* Price Display */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      £0.30
                    </span>
                    <span className="text-2xl md:text-3xl text-gray-600 font-medium">/min</span>
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    All features included. No hidden costs. No surprises.
                  </p>
                </div>

                {/* Core Features */}
                <div className="space-y-4 mb-10 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Everything included:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {coreFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-gray-900 text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    window.open("https://app.callhenk.com/self-onboard-demo", "_blank")
                  }
                >
                  Try Demo Now →
                </motion.button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  No credit card required
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits Stack - Right Side */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Benefits Cards */}
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Advanced Features Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 shadow-xl border border-blue-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Plus advanced features:
              </h4>
              <div className="space-y-2">
                {advancedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats/Social Proof */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">0</div>
            <div className="text-sm text-gray-600">Setup Fees</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">∞</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-600">Features Included</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
