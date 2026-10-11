"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const body = document.body;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    targets.forEach((target) => {
      const bounds = target.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        target.dataset.revealed = "true";
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.dataset.revealed = "true";
          } else {
            delete target.dataset.revealed;
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    body.classList.add("has-scroll-reveal");

    return () => {
      observer.disconnect();
      body.classList.remove("has-scroll-reveal");
      targets.forEach((target) => delete target.dataset.revealed);
    };
  }, []);

  return null;
}
