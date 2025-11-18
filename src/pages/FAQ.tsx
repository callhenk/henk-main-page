import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is the Henk Grant Program?",
        answer:
          "The Henk Grant Program provides eligible charities and nonprofits with complimentary or discounted access to Henk's AI voice agent platform for telephone fundraising and donor stewardship. Organizations earning under $5M annually receive free access, while larger organizations receive a 50% discount on our standard rate of $0.30 per minute.",
      },
      {
        question: "How long does the grant last?",
        answer:
          "The grant provides access for 12 months from the date of approval. Organizations earning under $5M receive their allocation free of charge during this period. After 12 months, organizations can choose to continue at standard rates or negotiate extended terms.",
      },
      {
        question: "What happens after the 12-month grant period ends?",
        answer:
          "At the end of the grant period, your account will transition to standard pricing unless you choose to pause or discontinue service. We'll contact you 60 days before the grant expires to discuss options, including potential discounts for continued partnership or transitioning to a pay-as-you-go model.",
      },
    ],
  },
  {
    category: "Eligibility & Application",
    questions: [
      {
        question: "Who is eligible to apply?",
        answer:
          "Registered 501(c)(3) nonprofits or equivalent charitable organizations that have been operating for at least 12 months, have annual revenue under $5M (for free tier) or above $5M (for discounted tier), currently conduct or plan to conduct telephone fundraising, and can commit to implementing Henk within 3 months.",
      },
      {
        question: "We don't currently do phone fundraising. Can we still apply?",
        answer:
          "Yes! If you're planning to launch telephone fundraising or donor stewardship campaigns within the 3-month implementation window, you're eligible. We'll work with you to develop your strategy and get started.",
      },
      {
        question: "How do we prove we're eager to use AI?",
        answer:
          "In your application, describe your organization's interest in AI technology, any previous experience with automation or digital tools, why telephone fundraising matters to your mission, and your vision for how Henk could transform your donor engagement. Specific examples of challenges you hope to solve demonstrate strong commitment.",
      },
      {
        question: "What does \"implement within 3 months\" mean exactly?",
        answer:
          "Implementation means completing onboarding, uploading your first donor list, creating at least one campaign script, and launching your first live campaign within 90 days of grant approval. Our team provides full support to ensure you hit this milestone.",
      },
      {
        question: "Can we apply if we've never used AI before?",
        answer:
          "Absolutely! We designed the grant program specifically to help organizations explore AI for the first time. No prior AI experience is required—just enthusiasm to learn and commitment to implement.",
      },
      {
        question: "Is this grant available internationally?",
        answer:
          "The grant is available to organizations in most countries, except those subject to US export controls or sanctions (including OFAC restrictions). Check our eligibility requirements or contact us to confirm your region is supported.",
      },
      {
        question: "We received a technology grant from another provider. Can we still apply?",
        answer:
          "Yes! Receiving grants from other technology providers doesn't disqualify you. However, if you've previously received a Henk grant, you're not eligible for a second grant.",
      },
    ],
  },
  {
    category: "Technical & Implementation",
    questions: [
      {
        question: "What technical requirements do we need to meet?",
        answer:
          "You'll need: (1) a donor database or CRM (Salesforce, HubSpot, Excel, etc.), (2) internet connection for accessing the Henk platform, (3) at least one staff member dedicated to managing campaigns, and (4) compliance with telephone fundraising regulations in your jurisdiction.",
      },
      {
        question: "Do we need technical expertise to use Henk?",
        answer:
          "No specialized technical skills are required. If you can use basic software like email or spreadsheets, you can use Henk. We provide comprehensive training and ongoing support to ensure your success.",
      },
      {
        question: "How much staff time is required?",
        answer:
          "Initial setup typically requires 10-15 hours over the first month (including training, script development, and list preparation). Ongoing campaign management requires approximately 2-5 hours per week, depending on campaign volume.",
      },
      {
        question: "Can Henk integrate with our existing CRM or donor management system?",
        answer:
          "Henk supports integration with major CRM platforms including Salesforce, HubSpot, Bloomerang, DonorPerfect, and others. We can also work with CSV file exports if direct integration isn't available. Our team will assess your specific setup during onboarding.",
      },
      {
        question: "What kind of training and support do you provide?",
        answer:
          "Grant recipients receive: (1) mandatory 2-hour virtual onboarding training, (2) dedicated implementation support during first 90 days, (3) access to knowledge base and video tutorials, (4) quarterly check-in calls, and (5) ongoing email/chat support throughout the grant period.",
      },
    ],
  },
  {
    category: "Pricing & Usage",
    questions: [
      {
        question: "What's included in the free grant for organizations under $5M revenue?",
        answer:
          "Organizations under $5M receive 12 months of free access to Henk, including: unlimited campaign creation, AI voice calling at no cost per minute (subject to fair use limits), full platform features, training and support, and integration assistance.",
      },
      {
        question: "What are the \"fair use limits\" for the free tier?",
        answer:
          "Fair use is designed to support genuine fundraising activities. For most organizations, this means up to 10,000 call minutes per month. If your needs exceed this, we'll work with you to find a sustainable solution.",
      },
      {
        question: "How does the 50% discount work for organizations over $5M?",
        answer:
          "Organizations with revenue over $5M receive our standard service at half price: $0.15 per minute instead of $0.30 per minute for 12 months. There are no setup fees or minimum commitments during the grant period.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No hidden fees. For under-$5M organizations, service is completely free during the grant period (within fair use limits). For over-$5M organizations, you pay only $0.15 per call minute with no setup fees, subscription fees, or platform access charges during the grant period.",
      },
      {
        question: "Can we upgrade or scale during the grant period?",
        answer:
          "Yes! If your calling volume exceeds expectations or you want to add premium features, we'll work with you to scale appropriately. For under-$5M orgs exceeding fair use, we offer continued discounted rates. Over-$5M orgs maintain the 50% discount throughout the 12-month period regardless of volume.",
      },
    ],
  },
  {
    category: "Results & Reporting",
    questions: [
      {
        question: "What kind of results can we expect?",
        answer:
          "Results vary by organization, but Henk users typically see: 20-40% increase in donor contact rates compared to human-only calling, 15-30% improvement in donor retention through consistent stewardship, 50-70% reduction in fundraising costs per dollar raised, and ability to reach 3-5x more donors with the same budget.",
      },
      {
        question: "How do we measure success?",
        answer:
          "Henk provides comprehensive analytics including: calls completed, contact rates, conversion rates (pledge/donation secured), average gift size, revenue generated, cost per successful contact, donor sentiment analysis, and campaign ROI. You'll have access to real-time dashboards and exportable reports.",
      },
      {
        question: "What reporting is required as a grant recipient?",
        answer:
          "We ask for: (1) quarterly feedback surveys (10-15 minutes each), (2) anonymized usage metrics (automatically collected), and (3) optional participation in case studies or testimonials. All reporting is designed to be minimally burdensome.",
      },
      {
        question: "Will you share our data or results publicly?",
        answer:
          "We only share anonymized, aggregated data unless you provide explicit permission. Case studies and testimonials are always opt-in. Your donor data remains completely confidential and is never shared with third parties.",
      },
    ],
  },
  {
    category: "Branding & Partnership",
    questions: [
      {
        question: "What does the \"Powered by Henk\" branding requirement mean?",
        answer:
          "Grant recipients agree to display a \"Powered by Henk\" badge on their website (typically in the footer or on a \"Partners\" page) for 12 months from grant approval. We provide ready-made badge graphics and implementation instructions. This helps us build awareness while recognizing your innovative approach.",
      },
      {
        question: "Can we mention Henk in our marketing materials?",
        answer:
          "Yes! We encourage you to share your experience using AI-powered fundraising. You're welcome to mention Henk in newsletters, social media, annual reports, and donor communications. We can provide suggested language if helpful.",
      },
      {
        question: "Can Henk use our organization's name in marketing?",
        answer:
          "With your permission, yes. We may feature grant recipients as case studies, in testimonials, or in program announcements. You'll always have the opportunity to review and approve any content before publication.",
      },
    ],
  },
  {
    category: "Application Process",
    questions: [
      {
        question: "How do I apply?",
        answer:
          "Complete the online application at henk.ai/grant. You'll need to provide: basic organization information, financial details (annual revenue), description of your fundraising program, explanation of your AI enthusiasm and implementation plan, and contact information for your project lead.",
      },
      {
        question: "How long does the application process take?",
        answer:
          "Applications are reviewed on a rolling basis. We aim to provide a decision within 2 weeks of submission. Once approved, you can begin onboarding immediately.",
      },
      {
        question: "What happens after we submit our application?",
        answer:
          "Our team reviews your application for eligibility and alignment with program goals. If we need clarification, we'll reach out via email. Approved applicants receive welcome materials, onboarding instructions, and an invitation to schedule training. Declined applicants receive feedback and may be invited to reapply in future grant cycles.",
      },
      {
        question: "Can we reapply if we're initially declined?",
        answer:
          "It depends on the reason for decline. If you were declined due to capacity concerns or timing issues, you may reapply once those are resolved. If declined due to fundamental eligibility requirements, reapplication won't change the outcome. We provide specific guidance in decline notifications.",
      },
      {
        question: "Is there a deadline to apply?",
        answer:
          "Applications are accepted on a rolling basis. However, the program has limited capacity and may close early if we reach maximum participants. We recommend applying as soon as you're ready to ensure consideration.",
      },
    ],
  },
  {
    category: "Compliance & Legal",
    questions: [
      {
        question: "How does Henk handle donor data and privacy?",
        answer:
          "Henk is fully compliant with GDPR, CCPA, and other data protection regulations. Your donor data is encrypted in transit and at rest, never shared with third parties, and processed only for your authorized campaigns. We maintain SOC 2 compliance and undergo regular security audits.",
      },
      {
        question: "Are Henk's AI calls compliant with telemarketing regulations?",
        answer:
          "Yes. Henk's platform is designed to comply with TCPA (US), Canadian Anti-Spam Legislation (CASL), and other telemarketing regulations. Organizations remain responsible for maintaining do-not-call lists, honoring opt-out requests, and ensuring calls are made during permitted hours. We provide compliance tools and guidance.",
      },
      {
        question: "What happens if we violate compliance requirements?",
        answer:
          "Henk reserves the right to suspend or terminate grant participation if we believe compliance violations have occurred. Organizations are responsible for ensuring their campaigns comply with all applicable laws. We provide education and tools to support compliance, but ultimate responsibility rests with the organization.",
      },
      {
        question: "Who owns the data generated during campaigns?",
        answer:
          "You do. All donor data, call recordings, transcripts, and analytics belong to your organization. You can export this data at any time. Henk retains anonymized, aggregated usage data to improve our service.",
      },
    ],
  },
  {
    category: "Program Terms",
    questions: [
      {
        question: "Can the grant be revoked?",
        answer:
          "Henk reserves the right to cancel a grant if program terms are violated, compliance issues arise, the organization misrepresents information, or legal/regulatory requirements necessitate termination. We provide notice when possible and work to resolve issues before revocation.",
      },
      {
        question: "Can we cancel or pause the grant?",
        answer:
          "Yes. If you need to pause campaigns temporarily (e.g., between fundraising seasons), that's fine. If you wish to discontinue the program entirely, simply notify us. Unused grant time cannot be extended or transferred.",
      },
      {
        question: "What if our organization's circumstances change during the grant period?",
        answer:
          "Contact us immediately if significant changes occur (merger, dissolution, leadership change, revenue changes, etc.). We'll work with you to determine next steps. In most cases, the grant can continue with updated information.",
      },
    ],
  },
  {
    category: "Still Have Questions?",
    questions: [
      {
        question: "How can we get more information before applying?",
        answer:
          "Visit our grant landing page at henk.ai/grant, email us at grants@henk.ai, or schedule a 15-minute discovery call with our team. We're happy to answer questions and help you determine if the grant is right for your organization.",
      },
    ],
  },
];

const FAQItem = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  inView,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20"
    >
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-8">{question}</h3>
        <ChevronDown
          className={`w-6 h-6 text-gray-700 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-6 text-gray-700 leading-relaxed">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({});

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: prev[key] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Comprehensive FAQ
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Henk Grant Program
                <br />
                <span className="text-gray-700">Frequently Asked Questions</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about the Henk Grant Program for nonprofits
                and charities.
              </p>
            </div>

            <div ref={ref} className="space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => (
                      <FAQItem
                        key={questionIndex}
                        question={faq.question}
                        answer={faq.answer}
                        index={questionIndex}
                        isOpen={openItems[`${categoryIndex}`] === questionIndex}
                        onToggle={() => toggleFAQ(categoryIndex, questionIndex)}
                        inView={inView}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-white/30 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Ready to Apply?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join hundreds of nonprofits using AI-powered fundraising to reach more
                donors and raise more funds.
              </p>
              <a
                href="/grants"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold text-lg"
              >
                Apply for Grant
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
