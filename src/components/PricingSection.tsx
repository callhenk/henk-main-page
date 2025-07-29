import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "£299",
    period: "per month",
    description: "Perfect for small charities getting started with AI fundraising",
    features: [
      "Up to 500 calls per month",
      "Basic conversation scripts",
      "Email support",
      "Standard analytics dashboard",
      "GDPR compliance",
      "Basic CRM integration"
    ],
    limitations: [
      "Limited customization",
      "No priority support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional", 
    price: "£799",
    period: "per month",
    description: "Ideal for growing charities ready to scale their fundraising",
    features: [
      "Up to 2,000 calls per month",
      "Advanced conversation AI",
      "Priority email & phone support",
      "Advanced analytics & insights",
      "Custom script development",
      "Multi-campaign management",
      "Advanced CRM integration",
      "Donor sentiment analysis"
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with complex fundraising needs",
    features: [
      "Unlimited calls",
      "Custom AI model training",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "White-label options",
      "Advanced security features",
      "Multi-language support",
      "Custom reporting",
      "SLA guarantees"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your charity's needs. All plans include our core AI technology 
            and can be upgraded or downgraded at any time.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl border p-8 ${
                plan.popular 
                  ? 'border-primary shadow-glow transform scale-105' 
                  : 'border-border shadow-elegant hover:shadow-glow'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 shadow-elegant' 
                    : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                }`}
                size="lg"
                onClick={() => window.open('https://calendly.com/jerome-callhenk/30min', '_blank')}
              >
                {plan.cta}
              </Button>
              
              {plan.name !== "Enterprise" && (
                <p className="text-sm text-muted-foreground text-center mt-4">
                  14-day free trial • No setup fees • Cancel anytime
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;