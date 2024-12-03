import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ClientWrapper } from "@/components/ui/client-wrapper";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container relative">
        <div className="flex flex-col items-center text-center gap-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Now with AI-powered insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Simplify Your Meetings,{" "}
            <span className="text-primary relative">
              Amplify Your Productivity
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M1 5.5C71.5 5.5 143.5 5.5 299 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[42rem] animate-fade-in">
            Websesh brings all your meeting tools into one platform, powered by AI for
            effortless collaboration and smart meeting insights.
          </p>
          <ClientWrapper>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-shadow">
                Sign Up for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                Learn More
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </ClientWrapper>
          <div className="relative w-full max-w-4xl mt-8 rounded-lg overflow-hidden shadow-2xl animate-scale">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Websesh Dashboard Preview"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}