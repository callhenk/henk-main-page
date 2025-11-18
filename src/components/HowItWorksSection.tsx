import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Upload Your Donor List",
    description:
      "Securely upload your donor database with contact information and preferences. Our system automatically validates and optimizes the data.",
  },
  {
    number: "02",
    title: "Customize Your Campaign",
    description:
      "Set your fundraising goals, customize conversation scripts, and define donor segments. Henk adapts to your charity's unique voice and mission.",
  },
  {
    number: "03",
    title: "Henk Makes the Calls",
    description:
      "Our AI agent begins calling donors using natural conversation flows, handling objections, and adapting to each individual's preferences in real-time.",
  },
  {
    number: "04",
    title: "Track & Optimize",
    description:
      "Monitor real-time results through our dashboard. Henk learns from each call to continuously improve conversion rates and donor satisfaction.",
  },
];

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              (01-04)
            </p>
            <h3 className="text-2xl font-bold text-gray-900">How it works</h3>
          </motion.div>
          <motion.div
            className="lg:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] mb-8">
              A simple AI fundraising platform that helps charities grow and thrive
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              From upload to optimization, get your AI fundraising campaign running in under 30 minutes. No technical expertise required.
            </p>
          </motion.div>
        </div>

        {/* Steps - Clean editorial layout */}
        <div ref={ref} className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="grid lg:grid-cols-12 gap-12 items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Number - Takes 4 columns */}
              <div className="lg:col-span-4">
                <div className="text-[120px] md:text-[160px] lg:text-[200px] font-bold leading-none text-gray-900">
                  {step.number}
                </div>
              </div>

              {/* Content - Takes 8 columns */}
              <div className="lg:col-span-8 pt-8 lg:pt-16">
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Inspired by the example */}
        <motion.div
          className="mt-32 pt-24 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
                &lt;30min
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Setup time
              </p>
              <p className="text-gray-600">
                Get your campaign running in under 30 minutes
              </p>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
                24/7
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Operations
              </p>
              <p className="text-gray-600">
                AI agents work around the clock for your charity
              </p>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
                100%
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Secure
              </p>
              <p className="text-gray-600">
                Your donor data is encrypted and protected
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button
            className="bg-gray-900 text-white px-10 py-5 text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            onClick={() =>
              window.open("https://app.callhenk.com/self-onboard-demo", "_blank")
            }
          >
            Try Henk Now →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
