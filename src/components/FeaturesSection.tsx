import { Phone, Brain, TrendingUp, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "@/components/animations/Reveal";

const features = [
  {
    icon: Brain,
    title: "Natural AI Conversations",
    description:
      "Henk speaks naturally and adapts to each donor's communication style, building genuine connections that drive results.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description:
      "Never miss a potential donor. Henk works around the clock, making calls across time zones when your donors are available.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Built with privacy at its core. Your donor data is always encrypted, protected, and handled with the highest security standards.",
  },
  {
    icon: Users,
    title: "Donor Insights",
    description:
      "Get detailed analytics on donor preferences, optimal call times, and conversation patterns to improve your campaigns.",
  },
  {
    icon: Phone,
    title: "Seamless Integration",
    description:
      "Easy setup with your existing CRM systems. Get started in minutes, not months, with our plug-and-play solution.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Operations",
    description:
      "More cost-effective than traditional telephone fundraising agencies. Reduce operational costs while maintaining personal donor connections and scale your outreach without expanding your team.",
  },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <section className="py-32 bg-white/10 backdrop-blur-md border-y border-white/10">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Advanced AI Technology
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">
            Why Charities Choose <span className="text-gray-900">Henk</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Combining advanced AI technology with deep understanding of charity
            fundraising to deliver results that matter for your mission.
          </p>
        </Reveal>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
