'use client';

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Demo } from "@/components/demo";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSectionObserver } from "@/hooks/use-section-observer";

export default function Home() {
  const { data: session } = useSession();
  useSectionObserver();

  useEffect(() => {
    if (session) {
      redirect("/dashboard");
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Demo />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}