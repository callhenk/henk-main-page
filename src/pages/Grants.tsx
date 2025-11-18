import { Button } from "@/components/ui/button";
import { Check, Award, ArrowRight, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import GrantChat from "@/components/GrantChat";
import { Link } from "react-router-dom";

const Grants = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gray-900/75 backdrop-blur-md overflow-hidden pt-40 pb-32 border-b border-white/10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-gray-100 mb-8">
                <Award className="w-4 h-4 mr-2" />
                Henk Grants Program
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                Voice AI Grant for Charities
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Build realistic AI voice agents to help your charity scale phone fundraising and stewardship with Henk
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-2xl px-10 py-6 text-xl shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const agentSection = document.querySelector('#apply-section');
                    if (agentSection) {
                      agentSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start Application
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                <Link to="/faq">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-2xl px-10 py-6 text-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  >
                    <HelpCircle className="w-6 h-6 mr-2" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Zigzag Layout */}
      <section className="py-32 bg-white relative z-10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
              Complete your application in three simple steps
            </p>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {/* Step 1 */}
            <Reveal delay={0.1}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5 relative">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute inset-0 -z-10 rounded-[40px] transform rotate-3"
                      style={{
                        background: "linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)",
                      }}
                    />
                    <div className="p-12 md:p-16">
                      <div className="text-[140px] md:text-[180px] lg:text-[200px] font-bold leading-none bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        01
                      </div>
                      <div className="mt-4 text-2xl md:text-3xl font-bold text-blue-600">
                        Submit
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Submit Application
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                    Talk to Lisa, our AI grant manager, to discuss your eligibility and application.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-blue-600 rounded-full" />
                    <div className="h-1 w-8 bg-gray-200 rounded-full" />
                    <div className="h-1 w-8 bg-gray-200 rounded-full" />
                    <span className="text-sm text-gray-400 font-medium ml-2">Step 1 of 3</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Arrow */}
            <motion.div
              className="hidden lg:flex justify-end py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-300" />
                <ArrowRight className="w-6 h-6 text-blue-400" strokeWidth={2} />
                <div className="h-px w-20 bg-gradient-to-r from-blue-300 to-transparent" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <Reveal delay={0.2}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center lg:grid-flow-dense">
                <div className="lg:col-span-5 lg:col-start-8 relative">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute inset-0 -z-10 rounded-[40px] transform -rotate-3"
                      style={{
                        background: "linear-gradient(135deg, #E0E7FF 0%, #EEF2FF 100%)",
                      }}
                    />
                    <div className="p-12 md:p-16">
                      <div className="text-[140px] md:text-[180px] lg:text-[200px] font-bold leading-none bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        02
                      </div>
                      <div className="mt-4 text-2xl md:text-3xl font-bold text-blue-600">
                        Review
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Review Process
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                    Our team reviews your eligibility and organizational fit. We evaluate your mission alignment, fundraising goals, and readiness to implement.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-blue-600 rounded-full" />
                    <div className="h-1 w-12 bg-blue-600 rounded-full" />
                    <div className="h-1 w-8 bg-gray-200 rounded-full" />
                    <span className="text-sm text-gray-400 font-medium ml-2">Step 2 of 3</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Arrow */}
            <motion.div
              className="hidden lg:flex justify-start py-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-20 bg-gradient-to-r from-blue-300 to-transparent" />
                <ArrowRight className="w-6 h-6 text-blue-400" strokeWidth={2} />
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-300" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <Reveal delay={0.3}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5 relative">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute inset-0 -z-10 rounded-[40px] transform rotate-3"
                      style={{
                        background: "linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)",
                      }}
                    />
                    <div className="p-12 md:p-16">
                      <div className="text-[140px] md:text-[180px] lg:text-[200px] font-bold leading-none bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        03
                      </div>
                      <div className="mt-4 text-2xl md:text-3xl font-bold text-blue-600">
                        Launch
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Get Started
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                    Receive approval and begin using Henk for your fundraising. Get full access to our AI platform and start reaching more donors immediately.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-blue-600 rounded-full" />
                    <div className="h-1 w-12 bg-blue-600 rounded-full" />
                    <div className="h-1 w-12 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-400 font-medium ml-2">Step 3 of 3</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grant Tiers Section - Modern Layout */}
      <section className="py-32 bg-white relative z-10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative">
          <Reveal className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What You Get
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
              Use £10K worth of AI voice credits. That's 35,000 minutes of conversation!
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Full Grant */}
            <Reveal delay={0.1}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[40px] transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                <div className="relative bg-white rounded-[40px] p-12 shadow-2xl border-2 border-blue-200/50 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.25)] transition-shadow duration-300">
                  <div className="text-center mb-10">
                    <div className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      100%
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      Full Grant
                    </h3>
                    <p className="text-xl text-gray-600 font-medium">
                      Revenue &lt; $5M
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">100% coverage for 12 months</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Full platform access</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">All features included</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Dedicated support</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 50% Discount */}
            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300" />
                <div className="relative bg-white rounded-[40px] p-12 shadow-2xl border-2 border-gray-300/50 hover:shadow-[0_25px_50px_-12px_rgba(17,24,39,0.25)] transition-shadow duration-300">
                  <div className="text-center mb-10">
                    <div className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      50%
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      Discount
                    </h3>
                    <p className="text-xl text-gray-600 font-medium">
                      Revenue ≥ $5M
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">50% off for 12 months</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Full platform access</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">All features included</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">Priority support</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Eligibility Section - Modern Layout */}
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
              We support nonprofits making a positive impact
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Active or Planned Fundraising
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Currently conducting or planning telephone fundraising campaigns to engage donors and raise funds for your mission.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Ready to Implement
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Commitment to launch within 3 months of grant approval with dedicated team support for implementation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section - Modern */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative z-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <HelpCircle className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Visit our comprehensive FAQ for details on eligibility, application process, and more
              </p>
              <Link to="/faq">
                <motion.button
                  className="bg-white text-gray-900 px-12 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View FAQ
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-section" className="py-32 bg-white/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8 tracking-tight">
              Start Your Application
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-light">
              Chat with our AI assistant to begin the grant application process. Share your organization's story and fundraising goals.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <GrantChat
              agentId="agent_7801kab1amnaerrra15pnxw5t2er"
              backendUrl="http://localhost:3000"
            />
          </Reveal>
        </div>
      </section>

      <Footer hideElevenLabsBadge={true} />
    </div>
  );
};

export default Grants;
