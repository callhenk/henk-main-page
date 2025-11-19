import { Button } from "@/components/ui/button";
import { Check, Award, ArrowRight, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import GrantChat from "@/components/GrantChat";
import UseCasesSection from "@/components/UseCasesSection";
import { Link } from "react-router-dom";

const Grants = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Oversized Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 mb-8 md:mb-[-90px] lg:mb-[-110px] text-center"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tight">
                Voice AI Grant
                <br />
                <span className="text-gray-500">for Charities</span>
              </h1>
            </motion.div>

            {/* Hero Card with Animated Background */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-xl mx-auto aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Gradient Base */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />

              {/* Animated Blobs Inside Card */}
              <motion.div
                className="absolute top-10 left-10 w-48 h-48 bg-blue-400/30 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -80, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-56 h-56 bg-blue-600/25 rounded-full blur-3xl"
                animate={{
                  x: [0, -90, 0],
                  y: [0, 100, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/15 rounded-full blur-3xl"
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Subtle Texture Overlay */}
              <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-gradient-to-br from-white/20 via-transparent to-white/10" />

              {/* Film Grain Effect */}
              <motion.div
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '200px 200px'],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              />
            </motion.div>

            {/* Description and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-10 md:mt-12 space-y-6"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                Build realistic AI voice agents to help your charity scale phone fundraising and stewardship
              </p>

              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full px-12 py-7 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const agentSection = document.querySelector('#apply-section');
                  if (agentSection) {
                    agentSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Apply now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're Doing It Section */}
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
              We believe that Voice AI is the future of fundraising
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                For most charities, the telephone is one of the most, if not the most, important fundraising and stewardship channel.
              </p>
              <p>
                However, it's becoming more and more difficult (and expensive) to take advantage of it. Teams are short staffed, making it near impossible to engage supporters effectively.
              </p>
              <p>
                Our platform gives your organization the tools and expertise you need to test how voice AI can support your call teams, without the financial risk. This includes £10K worth of AI voice credits and hands on support from our team.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCasesSection />

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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Full Grant */}
            <Reveal delay={0.1}>
              <div className="relative group h-full">
                {/* Gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-[44px] opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[40px] transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />

                <div className="relative bg-white rounded-[40px] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] hover:shadow-[0_30px_70px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 h-full flex flex-col">
                  {/* Header section */}
                  <div className="text-center mb-12">
                    {/* Icon badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>

                    {/* Percentage - Hero focal point */}
                    <div className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent leading-none tracking-tight">
                      100%
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                      Full Grant
                    </h3>

                    {/* Subtitle - softened */}
                    <p className="text-lg text-gray-500 font-normal">
                      Revenue &lt; $5M
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-blue-100 mb-10" />

                  {/* Features list */}
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">100% coverage for 12 months</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">Full platform access</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">All features included</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">Dedicated support</span>
                    </div>
                  </div>

                  {/* Accent corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-tl-3xl rounded-br-[40px]" />
                </div>
              </div>
            </Reveal>

            {/* 50% Discount */}
            <Reveal delay={0.2}>
              <div className="relative group h-full">
                {/* Gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-[44px] opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-[40px] transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500" />

                <div className="relative bg-white rounded-[40px] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(17,24,39,0.3)] hover:shadow-[0_30px_70px_-15px_rgba(17,24,39,0.4)] transition-all duration-500 h-full flex flex-col">
                  {/* Header section */}
                  <div className="text-center mb-12">
                    {/* Icon badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-6">
                      <Award className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Percentage - Hero focal point */}
                    <div className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent leading-none tracking-tight">
                      50%
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                      Discount
                    </h3>

                    {/* Subtitle - softened */}
                    <p className="text-lg text-gray-500 font-normal">
                      Revenue ≥ $5M
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 mb-10" />

                  {/* Features list */}
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-gray-700 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">50% off for 12 months</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-gray-700 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">Full platform access</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-gray-700 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">All features included</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-gray-700 stroke-[3]" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700 leading-relaxed">Priority support</span>
                    </div>
                  </div>

                  {/* Accent corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gray-100/40 to-transparent rounded-tl-3xl rounded-br-[40px]" />
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
              We support both advocacy and service non profits in the US, UK, Canada, and Australia
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Telephone Fundraising
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Currently conducting telephone fundraising campaigns, either via an in-house team or an agency. If you're just planning to get started with telephone fundraising, your organization is also eligible.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Registered Non Profit
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Must be a registered non profit in the country where you are registered in.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
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
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Visit our comprehensive FAQ for details on eligibility, application process, and more. Or reach out to us at{" "}
                <a
                  href="mailto:grants@callhenk.com"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  grants@callhenk.com
                </a>
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
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Start Your Application
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-light">
              Chat with our AI assistant to begin the grant application process. Share your organization's story and fundraising goals.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <GrantChat
              agentId="agent_7801kab1amnaerrra15pnxw5t2er"
              backendUrl={import.meta.env.VITE_BACKEND_URL || "https://app.callhenk.com"}
            />
          </Reveal>
        </div>
      </section>

      <Footer hideElevenLabsBadge={true} />
    </div>
  );
};

export default Grants;
