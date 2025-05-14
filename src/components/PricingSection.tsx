
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

type BillingPeriod = "monthly" | "yearly";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  
  const pricingPlans = [
    {
      name: "Basic",
      price: billingPeriod === "monthly" ? "$15" : "$144",
      description: "Digital content & community access",
      features: [
        "Access to digital content",
        "Community membership",
        "Monthly digital challenges",
        "Purpose passport access",
      ],
      isPopular: false
    },
    {
      name: "Premium",
      price: billingPeriod === "monthly" ? "$45" : "$432",
      description: "Physical kits + full digital access",
      features: [
        "Monthly experience box delivery",
        "Full access to digital content",
        "Priority community support",
        "Exclusive member events",
        "Purpose passport with special badges",
        "Quarterly discovery journal"
      ],
      isPopular: true
    }
  ];

  const savings = {
    basic: billingPeriod === "yearly" ? "Save $36" : "",
    premium: billingPeriod === "yearly" ? "Save $108" : "",
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-trybe-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Pricing Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Choose the right plan for your self-discovery journey
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg inline-flex">
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                billingPeriod === "monthly" ? "bg-white shadow-sm" : ""
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                billingPeriod === "yearly" ? "bg-white shadow-sm" : ""
              }`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Yearly <span className="text-trybe-teal">(20% off)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`reveal ${i === 1 ? "delay-100" : ""}`}>
              <Card className={`h-full flex flex-col ${plan.isPopular ? 'border-trybe-teal shadow-lg' : ''}`}>
                {plan.isPopular && (
                  <div className="bg-trybe-teal text-white text-center py-2 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{billingPeriod === "monthly" ? "month" : "year"}</span>
                    {billingPeriod === "yearly" && (
                      <div className="text-trybe-teal text-sm font-medium mt-2">
                        {i === 0 ? savings.basic : savings.premium}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-trybe-teal mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.isPopular ? "default" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mt-16 p-6 border border-dashed border-trybe-teal/40 rounded-xl">
          <h3 className="font-display font-bold text-xl mb-3">Add-ons & Special Offerings</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-medium">Gift Boxes ($49)</h4>
              <p className="text-sm text-muted-foreground">Perfect for sharing the joy of discovery</p>
            </div>
            <div>
              <h4 className="font-medium">1-on-1 Mentorship ($99)</h4>
              <p className="text-sm text-muted-foreground">Personalized guidance for your journey</p>
            </div>
            <div>
              <h4 className="font-medium">Deep Dive Kits ($79)</h4>
              <p className="text-sm text-muted-foreground">Advanced exploration of themes you love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
