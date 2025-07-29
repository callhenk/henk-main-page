import { Heart, MessageSquare, Ear, RefreshCw, TrendingUp, Gift, Calendar, UserCheck, FileText } from "lucide-react";

const useCases = [
  {
    icon: Heart,
    title: "Thank & Welcome Supporters",
    description: "Thank, welcome and check in with supporters, conveying how much they are valued.",
    category: "Stewardship"
  },
  {
    icon: MessageSquare,
    title: "Build Engagement",
    description: "Share news and communicate impact to build stronger relationships with your community.",
    category: "Engagement"
  },
  {
    icon: Ear,
    title: "Gather Supporter Feedback",
    description: "Listen to and learn from supporter feedback to improve your fundraising approach.",
    category: "Research"
  },
  {
    icon: RefreshCw,
    title: "Convert to Regular Giving",
    description: "Encourage occasional supporters to become regular givers and increase lifetime value.",
    category: "Conversion"
  },
  {
    icon: TrendingUp,
    title: "Upgrade Donation Values",
    description: "Ask supporters if they could increase the value of their gifts or donations.",
    category: "Upgrades"
  },
  {
    icon: Gift,
    title: "Offer Giving Options",
    description: "Give people a range of options to support the cause in ways that suit them best.",
    category: "Flexibility"
  },
  {
    icon: Calendar,
    title: "Legacy Giving Conversations",
    description: "Open up sensitive conversations about legacy giving in a respectful, natural way.",
    category: "Legacy"
  },
  {
    icon: UserCheck,
    title: "Support Event Fundraisers",
    description: "Guide and support event participants or volunteer fundraisers throughout their journey.",
    category: "Events"
  },
  {
    icon: FileText,
    title: "Administrative Tasks",
    description: "Check eligibility for Gift Aid or handle other administrative purposes efficiently.",
    category: "Admin"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Versatile <span className="text-primary">Use Cases</span> for Every Charity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Henk adapts to your specific fundraising needs, whether you're building relationships, 
            raising funds, or managing supporter communications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-elegant border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {useCase.title}
                    </h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {useCase.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default UseCasesSection;