import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "@/components/animations/Reveal";

const pricingPlans = [
  {
    name: "Starter",
    price: "$500",
    period: "per month",
    description:
      "Perfect for small charities getting started with AI fundraising",
    features: [
      "Up to 500 calls per month",
      "Basic conversation scripts",
      "Email support",
      "Standard analytics dashboard",
      "GDPR compliance",
      "Basic CRM integration",
    ],
    limitations: ["Limited customization", "No priority support"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$1000",
    period: "per month",
    description: "Ideal for growing charities ready to scale their fundraising",
    features: [
      "Up to 2,000 calls per month",
      "Advanced conversation AI",
      "Priority email & phone support",
      "Advanced analytics & insights",
      "Custom script development",
      "Multi-campaign management",
      "Advanced CRM integration",
      "Donor sentiment analysis",
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with complex fundraising needs",
    features: [
      "Unlimited calls",
      "Custom AI model training",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "White-label options",
      "Advanced security features",
      "Multi-language support",
      "Custom reporting",
      "SLA guarantees",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Transparent Pricing
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="text-gray-900">Pricing</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your charity's needs. All plans include
            our core AI technology and can be upgraded or downgraded at any
            time.
          </p>
        </Reveal>

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-3xl border p-10 ${
                plan.popular
                  ? "border-gray-900 shadow-2xl transform scale-105"
                  : "border-gray-200 shadow-lg hover:shadow-2xl"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: index * 0.25,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-numeric font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-700 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-700">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}

                {plan.limitations.map((limitation, limitationIndex) => (
                  <div
                    key={limitationIndex}
                    className="flex items-start space-x-3"
                  >
                    <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gray-900 hover:bg-gray-800 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
                size="lg"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jerome-callhenk/30min",
                    "_blank"
                  )
                }
              >
                {plan.cta}
              </Button>

              {plan.name !== "Enterprise" && (
                <p className="text-sm text-gray-600 text-center mt-4">
                  14-day free trial • No setup fees • Cancel anytime
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
