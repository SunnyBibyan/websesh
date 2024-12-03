'use client';

import { useEffect } from 'react';

export function useSectionObserver() {
  useEffect(() => {
    const sections = ['home', 'features', 'demo', 'testimonials', 'pricing', 'faq'];
    const observers: IntersectionObserver[] = [];

    // Cleanup function for all observers
    const cleanup = () => {
      observers.forEach(observer => observer.disconnect());
    };

    // Update URL without adding to history
    const updateUrl = (sectionId: string | null) => {
      if (typeof window === 'undefined') return;
      
      const newUrl = sectionId 
        ? `${window.location.pathname}#${sectionId}`
        : window.location.pathname;
      
      window.history.replaceState({}, '', newUrl);
    };

    // Create observers for each section
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              // If it's the home section and it's intersecting, remove the hash
              if (sectionId === 'home') {
                updateUrl(null);
              } else {
                updateUrl(sectionId);
              }
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

    // Handle initial URL hash
    const handleInitialHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Run initial hash check after a small delay to ensure DOM is ready
    setTimeout(handleInitialHash, 100);

    return cleanup;
  }, []);
}
