import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Phone,
  Brain,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Upload,
  Settings,
  BarChart,
  ArrowRight,
} from "lucide-react";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const slides = [
  {
    id: 1,
    type: "title",
    title: "Meet Henk",
    subtitle: "Your AI Fundraising Champion",
    description:
      "Transform your charity's fundraising with AI that speaks naturally, understands donors deeply, and works tirelessly to advance your mission.",
    image: "/hero-voice-ai.jpg",
  },
  {
    id: 2,
    type: "problem",
    title: "The Fundraising Challenge",
    points: [
      "Traditional telephone fundraising is expensive and time-consuming",
      "Limited calling hours reduce donor reach opportunities",
      "Inconsistent messaging across different callers",
      "High operational costs with human call centers",
      "Difficulty scaling outreach without expanding teams",
    ],
  },
  {
    id: 3,
    type: "solution",
    title: "Introducing Henk",
    subtitle: "AI-Powered Fundraising That Never Sleeps",
    points: [
      "Natural AI conversations that build genuine donor connections",
      "24/7 operations across all time zones",
      "Consistent, personalized messaging for every call",
      "Cost-effective alternative to traditional agencies",
      "Instant scalability without hiring additional staff",
    ],
  },
  {
    id: 4,
    type: "features",
    title: "Why Charities Choose Henk",
    features: [
      {
        icon: Brain,
        title: "Natural AI Conversations",
        description:
          "Speaks naturally and adapts to each donor's communication style",
      },
      {
        icon: Clock,
        title: "24/7 Operations",
        description: "Never miss a potential donor across any time zone",
      },
      {
        icon: Shield,
        title: "GDPR Compliant",
        description: "Full privacy protection and ethical data handling",
      },
      {
        icon: Users,
        title: "Donor Insights",
        description:
          "Detailed analytics on preferences and conversation patterns",
      },
      {
        icon: Phone,
        title: "Seamless Integration",
        description: "Easy setup with existing CRM systems in minutes",
      },
      {
        icon: TrendingUp,
        title: "Cost-Effective",
        description: "More affordable than traditional telephone fundraising",
      },
    ],
  },
  {
    id: 5,
    type: "how-it-works",
    title: "How Henk Works",
    subtitle: "Get started in 4 simple steps",
    steps: [
      {
        icon: Upload,
        step: "01",
        title: "Upload Your Donor List",
        description: "Securely upload donor database with contact information",
      },
      {
        icon: Settings,
        step: "02",
        title: "Customize Your Campaign",
        description: "Set goals, customize scripts, define donor segments",
      },
      {
        icon: Phone,
        step: "03",
        title: "Henk Makes the Calls",
        description: "AI agent calls donors with natural conversation flows",
      },
      {
        icon: BarChart,
        step: "04",
        title: "Track & Optimize",
        description: "Monitor results and continuously improve performance",
      },
    ],
  },
  {
    id: 6,
    type: "benefits",
    title: "Key Benefits",
    subtitle: "Transform Your Fundraising Operations",
    benefits: [
      "🎯 Higher conversion rates through personalized conversations",
      "💰 Reduced operational costs vs traditional call centers",
      "⏰ 24/7 availability increases donor contact opportunities",
      "📊 Real-time analytics for campaign optimization",
      "🔒 GDPR compliance ensures donor trust and privacy",
      "⚡ Quick setup - operational in under 30 minutes",
    ],
  },
  {
    id: 7,
    type: "cta",
    title: "Ready to Transform Your Fundraising?",
    subtitle: "See Henk in Action Today",
    description:
      "Join forward-thinking charities already using AI to advance their missions more effectively.",
    features: ["No setup fees", "24/7 operations", "GDPR compliant"],
  },
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const downloadPDF = async () => {
    setIsGeneratingPDF(true);

    try {
      const pdf = new jsPDF("l", "mm", [297, 210]); // A4 landscape
      const originalSlide = currentSlide;

      for (let i = 0; i < slides.length; i++) {
        // Switch to each slide
        setCurrentSlide(i);

        // Wait for the slide to render
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const slideElement = slideContainerRef.current;
        if (slideElement) {
                  const canvas = await html2canvas(slideElement, {
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#1a202c",
          width: slideElement.scrollWidth,
          height: slideElement.scrollHeight,
          logging: false,
          removeContainer: true,
        });

          const imgData = canvas.toDataURL("image/png");

          if (i > 0) {
            pdf.addPage();
          }

          // Calculate dimensions to fit the page
          const pdfWidth = 297;
          const pdfHeight = 210;
          const canvasAspect = canvas.width / canvas.height;
          const pdfAspect = pdfWidth / pdfHeight;

          let imgWidth, imgHeight, x, y;

          if (canvasAspect > pdfAspect) {
            imgWidth = pdfWidth;
            imgHeight = pdfWidth / canvasAspect;
            x = 0;
            y = (pdfHeight - imgHeight) / 2;
          } else {
            imgHeight = pdfHeight;
            imgWidth = pdfHeight * canvasAspect;
            x = (pdfWidth - imgWidth) / 2;
            y = 0;
          }

          pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
        }
      }

      // Restore original slide
      setCurrentSlide(originalSlide);

      // Save the PDF
      pdf.save("henk-pitch-deck.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const currentSlideData = slides[currentSlide];

  const renderSlide = () => {
    switch (currentSlideData.type) {
      case "title":
        return (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl">
              <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                    {currentSlideData.title.split(" ").map((word, i) =>
                      word === "Henk" ? (
                        <span key={i} className="text-blue-200 font-bold">
                          {word}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    )}
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-200">
                    {currentSlideData.subtitle}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                    {currentSlideData.description}
                  </p>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <img
                  src={currentSlideData.image}
                  alt="Henk Voice Technology"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        );

      case "problem":
        return (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-4xl space-y-8 lg:space-y-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
                {currentSlideData.title}
              </h1>
              <div className="grid gap-4 lg:gap-6">
                {currentSlideData.points?.map((point, index) => (
                  <div
                    key={index}
                    className="p-4 lg:p-6 border-l-4 border-l-red-400 bg-gray-800/50 border border-gray-700 rounded-lg"
                  >
                    <p className="text-base lg:text-lg text-gray-200 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "solution":
        return (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-4xl space-y-8 lg:space-y-12">
              <div className="text-center space-y-4 lg:space-y-6">
                                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    {currentSlideData.title.split(" ").map((word, i) =>
                      word === "Henk" ? (
                        <span key={i} className="text-blue-200 font-bold">
                          {word}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    )}
                  </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
                  {currentSlideData.subtitle}
                </h2>
              </div>
              <div className="grid gap-4 lg:gap-6">
                {currentSlideData.points?.map((point, index) => (
                  <div key={index} className="p-4 lg:p-6 border-l-4 border-l-blue-400 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <p className="text-base lg:text-lg text-gray-200 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-6xl space-y-8 lg:space-y-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
                {currentSlideData.title.split(" ").map((word, i) =>
                  word === "Henk" ? (
                    <span key={i} className="text-blue-400">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h1>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {currentSlideData.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 lg:p-6 text-center bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="space-y-3 lg:space-y-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-400 rounded-lg flex items-center justify-center mx-auto">
                        <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "how-it-works":
        return (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-6xl space-y-8 lg:space-y-12">
              <div className="text-center space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {currentSlideData.title.split(" ").map((word, i) =>
                    word === "Henk" ? (
                      <span key={i} className="text-blue-200 font-bold">
                        {word}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h1>
                <p className="text-lg sm:text-xl text-gray-200">
                  {currentSlideData.subtitle}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {currentSlideData.steps?.map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="relative inline-block mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                        <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold text-white">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base">{step.description}</p>
                    {index < currentSlideData.steps!.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-full w-full">
                        <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "benefits":
        return (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-4xl space-y-8 lg:space-y-12">
              <div className="text-center space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {currentSlideData.title}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-gray-200">
                  {currentSlideData.subtitle}
                </p>
              </div>
              <div className="grid gap-4 lg:gap-6">
                {currentSlideData.benefits?.map((benefit, index) => (
                  <div key={index} className="p-4 lg:p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <p className="text-base lg:text-lg text-gray-200 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "cta":
        return (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-4xl text-center space-y-8 lg:space-y-12">
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-200">
                  {currentSlideData.subtitle}
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {currentSlideData.description}
                </p>
              </div>

              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-gray-300"
                onClick={() =>
                  window.open(
                    "https://calendly.com/jerome-callhenk/30min",
                    "_blank"
                  )
                }
              >
                💬 See Henk in Action
              </Button>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
                {currentSlideData.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="font-medium text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with controls */}
      <div className="bg-gray-900 border-b border-gray-700 px-4 sm:px-6 py-4 sm:py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Henk <span className="text-blue-200">Pitch Deck</span>
            </h1>
            <div className="text-xs sm:text-sm font-medium text-gray-300 bg-gray-800 px-2 sm:px-3 py-1 rounded-full">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadPDF}
              disabled={isGeneratingPDF}
              className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-gray-900 border-gray-300 text-xs sm:text-sm"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{isGeneratingPDF ? "Generating..." : "Download PDF"}</span>
              <span className="sm:hidden">{isGeneratingPDF ? "..." : "PDF"}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide content */}
      <div ref={slideContainerRef} className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-24 sm:pb-32 pdf-slide">
        {renderSlide()}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 px-4 sm:px-6 py-3 sm:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0 || isGeneratingPDF}
            className="flex items-center space-x-1 sm:space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 text-xs sm:text-sm px-2 sm:px-3"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isGeneratingPDF}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-blue-400"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1 || isGeneratingPDF}
            className="flex items-center space-x-1 sm:space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 text-xs sm:text-sm px-2 sm:px-3"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
