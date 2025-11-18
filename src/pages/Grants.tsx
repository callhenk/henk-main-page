import { Button } from "@/components/ui/button";
import { Check, Phone, MessageSquare, Award, Users, Clock, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VapiAgent from "@/components/VapiAgent";
import { Link } from "react-router-dom";

const Grants = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gray-900/70 backdrop-blur-md overflow-hidden pt-32 pb-20 border-b border-white/10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm text-gray-100 mb-6">
                <Award className="w-4 h-4 mr-2" />
                Henk Grants Program
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Apply for a Grant with Our AI Voice Agent
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Experience the future of grant applications. Our AI voice agent will call you,
                gather your information, and process your application—all through a natural conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl px-8 py-4 text-lg shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const agentSection = document.querySelector('#voice-agent');
                    if (agentSection) {
                      agentSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/faq">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-xl px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Learn More (FAQ)
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              How the AI Grant Application Works
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Simple, conversational, and efficient—complete your application in minutes.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  1. Schedule Your Call
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Choose a convenient time for Henk to call you, or request an immediate callback.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  2. Natural Conversation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Henk will ask you questions about your organization and grant needs in a natural, conversational way.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  3. Application Submitted
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your responses are automatically processed and reviewed. You'll receive a decision via email.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Grant Eligibility
            </h2>
            <p className="text-xl text-gray-700">
              Your grant amount depends on your organization's annual revenue.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Reveal delay={0.1}>
              <div className="bg-white/30 backdrop-blur-md rounded-3xl p-10 shadow-xl border-2 border-blue-500/30">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Full Grant
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    Annual Revenue &lt; £5 Million
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">100% grant coverage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Complete access to Henk platform</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">All features included</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ongoing support</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 shadow-xl border-2 border-gray-300/30">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    50% Discount
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    Annual Revenue ≥ £5 Million
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">50% off standard pricing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Complete access to Henk platform</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">All features included</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Priority support</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grant Details Section */}
      <section className="py-24 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              What We're Looking For
            </h2>
            <p className="text-xl text-gray-700">
              We support organizations that are making a positive impact in their communities.
            </p>
          </Reveal>

          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Charitable Organizations
                  </h3>
                  <p className="text-gray-700">
                    Registered charities, nonprofits, and social enterprises making a difference.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Innovative Fundraising Needs
                  </h3>
                  <p className="text-gray-700">
                    Organizations looking to modernize their donor engagement and fundraising operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Commitment to Impact
                  </h3>
                  <p className="text-gray-700">
                    Clear mission, measurable goals, and dedication to transparency and accountability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Growth Potential
                  </h3>
                  <p className="text-gray-700">
                    Organizations ready to scale their fundraising efforts and expand their reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Why Apply Through Henk?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Experience the advantages of AI-powered grant applications.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <Clock className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Save Time
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No lengthy forms to fill out. Just have a conversation at your convenience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <Phone className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  24/7 Availability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Apply anytime, day or night. Henk is always ready to take your call.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <Users className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Natural Experience
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Speak naturally—no need to navigate complex application portals.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <MessageSquare className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Clarification in Real-Time
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ask questions and get immediate clarification during your call.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <Award className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fair & Consistent
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every applicant gets the same thorough, unbiased evaluation process.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <Check className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fast Processing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your application is reviewed immediately—no weeks of waiting.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-gray-900/70 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-3xl p-12 text-center shadow-2xl border border-white/20">
              <HelpCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Have Questions About the Grant Program?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Visit our comprehensive FAQ page to learn about eligibility requirements, application process,
                pricing details, technical requirements, and much more.
              </p>
              <Link to="/faq">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View Comprehensive FAQ
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apply Section with Voice Agent */}
      <section id="voice-agent" className="py-24 bg-gray-900/70 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Talk to Henk Now
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Click below to start a voice conversation with Henk. Our AI agent will ask you questions about your organization
              and gather your grant application information through a natural conversation.
            </p>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            <Reveal delay={0.2}>
              <VapiAgent
                agentId="agent_7801kab1amnaerrra15pnxw5t2er"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grants;
