import { Phone, Brain, TrendingUp, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Natural AI Conversations",
    description: "Henk speaks naturally and adapts to each donor's communication style, building genuine connections that drive results."
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Never miss a potential donor. Henk works around the clock, making calls across time zones when your donors are available."
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Built with privacy at its core. Full GDPR compliance ensures your donor data is always protected and handled ethically."
  },
  {
    icon: Users,
    title: "Donor Insights",
    description: "Get detailed analytics on donor preferences, optimal call times, and conversation patterns to improve your campaigns."
  },
  {
    icon: Phone,
    title: "Seamless Integration",
    description: "Easy setup with your existing CRM systems. Get started in minutes, not months, with our plug-and-play solution."
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Operations",
    description: "More cost-effective than traditional telephone fundraising agencies. Reduce operational costs while maintaining personal donor connections and scale your outreach without expanding your team."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Charities Choose <span className="text-primary">Henk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining advanced AI technology with deep understanding of charity fundraising 
            to deliver results that matter for your mission.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-elegant border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;