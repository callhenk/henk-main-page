import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your 
            <br />
            Fundraising Results?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Join hundreds of charities already using Henk to increase donations 
            and build stronger donor relationships. Start your free trial today.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-elegant text-lg px-8 py-4"
              onClick={() => window.open('https://calendly.com/jerome-callhenk/30min', '_blank')}
            >
              Book A Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTASection;