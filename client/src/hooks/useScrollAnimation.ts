import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      }
    );

    // Observe all elements with scroll-animate class within the ref element
    const animateElements = element.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold]);

  return elementRef;
}
