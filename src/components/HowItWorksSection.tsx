import {
  ArrowRight,
  Upload,
  Settings,
  Phone,
  BarChart,
  Clock,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Donor List",
    description:
      "Securely upload your donor database with contact information and preferences. Our system automatically validates and optimizes the data.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Customize Your Campaign",
    description:
      "Set your fundraising goals, customize conversation scripts, and define donor segments. Henk adapts to your charity's unique voice and mission.",
  },
  {
    icon: Phone,
    step: "03",
    title: "Henk Makes the Calls",
    description:
      "Our AI agent begins calling donors using natural conversation flows, handling objections, and adapting to each individual's preferences in real-time.",
  },
  {
    icon: BarChart,
    step: "04",
    title: "Track & Optimize",
    description:
      "Monitor real-time results through our dashboard. Henk learns from each call to continuously improve conversion rates and donor satisfaction.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            How <span className="text-gray-900">Henk</span> Works
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Get started in minutes with our simple 4-step process. No technical
            expertise required.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-numeric font-bold text-white">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-6 py-3 rounded-full">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700 font-medium">
              Setup time: Less than 30 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
