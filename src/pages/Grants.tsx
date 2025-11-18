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
                AI-Powered Grant Applications
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Get free or discounted access to Henk's AI voice agent platform for your nonprofit's fundraising needs.
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

      {/* How It Works Section */}
      <section className="py-32 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
              Complete your application in three simple steps
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-3 tracking-wider uppercase">Step 1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Submit Application
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Contact us with your organization details and funding needs
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-3 tracking-wider uppercase">Step 2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Review Process
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team reviews your eligibility and organizational fit
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-3 tracking-wider uppercase">Step 3</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Started
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Receive approval and begin using Henk for your fundraising
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-32 bg-white/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Grant Tiers
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
              Choose the tier that matches your organization's annual revenue
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 mb-16 max-w-5xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border-2 border-blue-500/40 hover:border-blue-500/60 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-2xl mb-6 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Full Grant
                  </h3>
                  <p className="text-xl text-gray-700 font-semibold">
                    Revenue &lt; $5M
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">100% coverage for 12 months</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Full platform access</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">All features included</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Dedicated support</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 shadow-xl border-2 border-gray-300/40 hover:border-gray-400/60 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700 rounded-2xl mb-6 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    50% Discount
                  </h3>
                  <p className="text-xl text-gray-700 font-semibold">
                    Revenue ≥ $5M
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">50% off for 12 months</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Full platform access</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">All features included</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Priority support</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grant Details Section */}
      <section className="py-32 bg-white/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Eligibility Criteria
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
              We support nonprofits making a positive impact
            </p>
          </Reveal>

          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/20">
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <Check className="w-7 h-7 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Active or Planned Fundraising
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Currently conducting or planning telephone fundraising campaigns
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <Check className="w-7 h-7 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Ready to Implement
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Commitment to launch within 3 months of grant approval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="py-32 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="max-w-4xl mx-auto bg-white/15 backdrop-blur-md rounded-3xl p-16 text-center shadow-xl border border-white/20">
              <HelpCircle className="w-16 h-16 text-blue-500 mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                Questions?
              </h2>
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-light">
                Visit our comprehensive FAQ for details on eligibility, application process, and more
              </p>
              <Link to="/faq">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl px-10 py-6 text-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View FAQ
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
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
