'use client';

import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'features', 'demo', 'testimonials', 'pricing', 'faq'];
    const observers: IntersectionObserver[] = [];

    // Cleanup function for all observers
    const cleanup = () => {
      observers.forEach(observer => observer.disconnect());
    };

    // Create observers for each section
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-50px 0px -50px 0px'
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return cleanup;
  }, []);

  return activeSection;
}
