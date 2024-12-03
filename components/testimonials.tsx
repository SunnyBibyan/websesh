"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const testimonials = [
  {
    quote: "Websesh saves me hours every week by summarizing meetings and keeping all tools connected. A game-changer!",
    author: "Sarah M.",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    quote: "The AI summaries are incredibly accurate and help our team stay aligned without watching entire recordings.",
    author: "Michael R.",
    role: "Engineering Lead",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    quote: "Integration with all our meeting tools was seamless. Websesh has become essential for our remote team.",
    author: "Lisa K.",
    role: "Operations Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <Container id="testimonials">
      <SectionHeader
        title="Trusted by Teams and Professionals"
        description="See what our users have to say about Websesh"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.author} className="p-6 hover:shadow-lg transition-shadow">
            <blockquote className="text-lg mb-4">{testimonial.quote}</blockquote>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}