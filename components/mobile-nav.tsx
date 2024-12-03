'use client';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeSection?: string;
}

export function MobileNav({ activeSection }: MobileNavProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = session ? [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Meetings", href: "/meetings" },
    { name: "Analytics", href: "/analytics" },
    { name: "Recordings", href: "/recordings" },
    { name: "Settings", href: "/settings" }
  ] : [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          {navItems.map((item) => {
            const isActive = session 
              ? pathname === item.href
              : activeSection === item.href.replace('#', '');
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t">
            {session ? (
              <>
                <span className="text-sm text-muted-foreground block mb-4">
                  {session.user?.email}
                </span>
                <Button 
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => router.push("/auth/signin")}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}