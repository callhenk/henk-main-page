import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const platformFeatures = [
  {
    title: "Campaign Management",
    description:
      "Create and manage fundraising campaigns with intuitive controls and real-time analytics.",
    image: "/campaign.png",
    features: [
      "Real-time analytics",
      "Donor segmentation",
      "Performance tracking",
    ],
  },
  {
    title: "AI Agent Dashboard",
    description:
      "Monitor your AI agents in real-time with detailed insights and conversation analytics.",
    image: "/agent.png",
    features: [
      "Live call monitoring",
      "Conversation analytics",
      "Agent performance",
    ],
  },
  {
    title: "Workflow Builder",
    description:
      "Design custom conversation flows and donor engagement strategies with our visual builder.",
    image: "/workflow builder.png",
    features: ["Visual flow builder", "Custom scripts", "A/B testing"],
  },
];

const PlatformShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-200 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            Platform Features
          </div>
          <h2 className="text-5xl font-display font-bold text-white mb-6">
            Powerful Platform for{" "}
            <span className="text-white">Modern Fundraising</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to run successful AI-powered fundraising
            campaigns in one comprehensive platform.
          </p>
        </motion.div>

        <motion.div ref={ref} className="space-y-24">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-center space-x-3 text-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + itemIndex * 0.1,
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="flex-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
