import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How does Henk's AI voice agent work?",
    answer:
      "Henk uses advanced natural language processing to conduct authentic phone conversations with your donors. The AI agent can understand context, respond appropriately to questions, handle objections, and adapt to each donor's communication style. It's trained specifically on fundraising best practices and charity stewardship protocols to ensure professional, empathetic interactions that align with your organization's values.",
  },
  {
    question: "What is the ROI of using Henk compared to traditional phone fundraising?",
    answer:
      "Charities using Henk typically see 40-60% cost reduction compared to traditional call centers while maintaining similar or better conversion rates. With usage-based pricing at £0.30 per minute, you're paying approximately £0.90 per 3-minute call versus £5-15 per call with traditional agencies. Plus, Henk operates 24/7 without additional staffing costs, allowing you to reach donors at optimal times and significantly increase your fundraising capacity. You only pay for actual call time with no monthly minimums or setup fees.",
  },
  {
    question: "How is donor data protected and secured?",
    answer:
      "Henk takes data security seriously. All donor data is encrypted in transit and at rest using industry-standard encryption protocols. We process data strictly for fundraising purposes as outlined in your data agreements. Donors can request data deletion at any time, and we maintain detailed audit logs of all interactions. Our platform undergoes regular security audits and follows industry best practices for data protection. We never share donor data with third parties without your explicit permission.",
  },
  {
    question: "How quickly can we set up and launch our first campaign?",
    answer:
      "Most charities launch their first campaign in less than 30 minutes. Simply upload your donor list (CSV or integrate with your CRM), customize your campaign script using our template library, set calling hours and preferences, and activate the campaign. Our onboarding team provides guided setup and best practices to ensure success from day one. You can start with a small test campaign before scaling up.",
  },
];

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-md">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Frequently Asked Questions
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About Henk
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about AI-powered fundraising, implementation, and results.
          </p>
        </Reveal>

        <motion.div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-700 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-12 text-center">
          <p className="text-gray-700 mb-6">Have more questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/faq"
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold"
            >
              View All FAQs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://app.callhenk.com/self-onboard-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              Try Demo Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQSection;
