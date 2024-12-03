"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals getting started",
    features: [
      "Basic integrations",
      "5 meeting summaries per month",
      "7-day recording storage",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Ideal for professionals and small teams",
    popular: true,
    features: [
      "Advanced AI features",
      "Unlimited meeting summaries",
      "30-day recording storage",
      "Team collaboration tools",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Custom integrations",
      "Advanced security features",
      "Unlimited storage",
      "Dedicated support",
      "Custom branding",
      "API access",
    ],
  },
];

export function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container id="pricing">
      <SectionHeader
        title="Plans That Scale With Your Needs"
        description="Choose the perfect plan for your team"
      />
      <div 
        ref={ref}
        className="grid md:grid-cols-3 gap-8"
      >
        {plans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`p-8 relative ${
              plan.popular ? 'border-primary shadow-lg' : ''
            } ${inView ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Button>
          </Card>
        ))}
      </div>
    </Container>
  );
}