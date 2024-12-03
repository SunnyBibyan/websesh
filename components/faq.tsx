"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "How does Websesh integrate with meeting platforms?",
    answer: "We connect seamlessly with Zoom, Google Meet, and Microsoft Teams through their official APIs. Simply authorize your accounts once, and Websesh will automatically sync with your meetings.",
  },
  {
    question: "What is the free plan limitation?",
    answer: "The free plan includes summaries for up to 5 meetings per month, 7-day recording storage, and basic integrations. Perfect for individuals or small teams getting started with Websesh.",
  },
  {
    question: "Can I export meeting summaries and action items?",
    answer: "Yes! You can export meeting summaries, notes, and action items in various formats including PDF, Markdown, and directly to popular task management tools.",
  },
  {
    question: "Is my meeting data secure?",
    answer: "Absolutely. We use enterprise-grade encryption for all data storage and transmission. Your meeting content is only accessible to authorized team members.",
  },
];

export function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container>
      <SectionHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about Websesh"
      />
      <div 
        ref={ref}
        className={`max-w-3xl mx-auto ${
          inView ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className={inView ? 'animate-slide-up' : 'opacity-0'}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}