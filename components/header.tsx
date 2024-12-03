'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/use-active-section";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur",
      isScrolled ? "border-border" : "border-transparent"
    )}>
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-6" />
        </Link>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-6">
            {!session ? (
              <>
                <Link 
                  href="#home" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === "home" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Home
                </Link>
                <Link 
                  href="#features" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === "features" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Features
                </Link>
                <Link 
                  href="#demo" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === "demo" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Demo
                </Link>
                <Link 
                  href="#testimonials" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === "testimonials" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Testimonials
                </Link>
                <Link 
                  href="#pricing" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === "pricing" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Pricing
                </Link>
                <Link 
                  href="#faq" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === "faq" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  FAQ
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/dashboard" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/dashboard" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/meetings" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/meetings" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Meetings
                </Link>
                <Link 
                  href="/analytics" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/analytics" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Analytics
                </Link>
                <Link 
                  href="/recordings" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/recordings" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Recordings
                </Link>
                <Link 
                  href="/settings" 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/settings" 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  Settings
                </Link>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <>
                <span className="text-sm text-muted-foreground">
                  {session.user?.email}
                </span>
                <Button 
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-primary hover:bg-primary/90"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => router.push("/auth/signin")}
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            )}
          </div>
          <MobileNav activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}