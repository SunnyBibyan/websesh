"use client";

import { Card } from "@/components/ui/card";
import { Brain, Calendar, Layout, Video } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";

const features = [
  {
    title: "Smart Meeting Summaries",
    description: "AI-powered summaries for quick insights and better retention.",
    icon: Brain,
  },
  {
    title: "Unified Integrations",
    description: "Connect Zoom, Google Meet, and Microsoft Teams seamlessly.",
    icon: Video,
  },
  {
    title: "Scheduling Made Easy",
    description: "Sync calendars and avoid scheduling conflicts effortlessly.",
    icon: Calendar,
  },
  {
    title: "Collaborative Dashboard",
    description: "Access meeting notes, action items, and recordings in one place.",
    icon: Layout,
  },
];

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container id="features">
      <SectionHeader
        title="Why Choose Websesh?"
        description="Everything you need to make your meetings more productive"
      />
      <div 
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <Card 
            key={feature.title} 
            className={`p-6 group hover:shadow-lg transition-all duration-300 ${
              inView ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="h-12 w-12 text-primary mb-4 transform group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}