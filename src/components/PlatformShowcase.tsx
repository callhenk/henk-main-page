import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "@/components/animations/Reveal";

const platformFeatures = [
  {
    title: "Campaign Management",
    description:
      "Create and manage fundraising campaigns with intuitive controls and real-time analytics.",
    image: "/campaign-v2.png",
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
    image: "/agent-v2.png",
    features: [
      "Live call monitoring",
      "Conversation analytics",
      "Agent performance",
    ],
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your fundraising performance with comprehensive analytics and reporting tools.",
    image: "/analytics-v2.png",
    features: ["Detailed call metrics", "Conversion tracking", "ROI analysis"],
  },
  {
    title: "Conversation Intelligence",
    description:
      "Review and analyze every conversation with advanced AI-powered insights to optimize your fundraising approach.",
    image: "/conversation-v2.png",
    features: [
      "Conversation transcripts",
      "Sentiment analysis",
      "Key topics extraction",
    ],
  },
  {
    title: "Workflow Builder",
    description:
      "Design custom conversation flows and donor engagement strategies with our visual builder.",
    image: "/workflow-builder-v2.png",
    features: ["Visual flow builder", "Custom scripts", "A/B testing"],
  },
];

const PlatformShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <section className="py-32 bg-gray-900/70 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm text-gray-200 mb-6">
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
        </Reveal>

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
                duration: 0.9,
                delay: index * 0.25,
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
                        duration: 0.7,
                        delay: index * 0.25 + itemIndex * 0.12,
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
                transition={{ duration: 0.9, delay: index * 0.25 + 0.35 }}
              >
                <div className="relative">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
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
