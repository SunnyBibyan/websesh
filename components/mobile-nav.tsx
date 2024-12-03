"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-2 py-1 text-lg hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mt-4" onClick={() => setOpen(false)}>
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}