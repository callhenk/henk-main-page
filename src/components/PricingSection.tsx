import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "@/components/animations/Reveal";

const allFeatures = [
  "Natural AI conversations",
  "24/7 automated calling",
  "Advanced conversation AI",
  "Real-time analytics & insights",
  "Custom script development",
  "Multi-campaign management",
  "Advanced CRM integration",
  "Donor sentiment analysis",
  "Secure data encryption",
  "Email & phone support",
  "Conversation transcripts",
  "Performance tracking",
  "A/B testing capabilities",
  "Visual workflow builder",
  "Unlimited team members",
];

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <section
      id="pricing"
      className="py-32 bg-white/10 backdrop-blur-md"
    >
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Simple Usage-Based Pricing
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">
            Pay Only for What You <span className="text-gray-900">Use</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            No monthly fees, no tiers, no limits. Just simple per-minute pricing with access to all features.
          </p>
        </Reveal>

        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-2xl border-2 border-gray-900/10">
            <div className="text-center mb-12">
              <div className="mb-6">
                <span className="text-7xl font-numeric font-bold text-gray-900">
                  $0.30
                </span>
                <span className="text-2xl text-gray-700 ml-3">per minute</span>
              </div>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                All features included. No setup fees. No monthly commitments. Scale up or down as needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
              {allFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                  }}
                >
                  <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <Button
                className="w-full bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://app.callhenk.com/self-onboard-demo",
                    "_blank"
                  )
                }
              >
                Try Demo Now
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Test the AI voice agent and prompt generator • No credit card required
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
