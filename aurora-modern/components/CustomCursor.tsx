"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is desktop (has hover and fine pointer)
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    // Show cursor elements
    dot.style.display = "block";
    outline.style.display = "block";

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Dot follows instantly
      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Outline follows with delay
      gsap.to(outline, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Handle hover effects
    const interactiveElements = document.querySelectorAll(".cursor-none-target");
    
    const onMouseEnter = () => {
      gsap.to(outline, {
        width: 60,
        height: 60,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "transparent",
        duration: 0.3,
      });
      gsap.to(dot, { opacity: 0, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(outline, {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.3)",
        duration: 0.3,
      });
      gsap.to(dot, { opacity: 1, duration: 0.3 });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // MutationObserver to handle dynamically added elements (if any)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                 const newElements = document.querySelectorAll(".cursor-none-target");
                 newElements.forEach((el) => {
                    el.removeEventListener("mouseenter", onMouseEnter);
                    el.removeEventListener("mouseleave", onMouseLeave);
                    el.addEventListener("mouseenter", onMouseEnter);
                    el.addEventListener("mouseleave", onMouseLeave);
                 });
            }
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });


    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 w-[6px] h-[6px] bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference hidden -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        ref={outlineRef}
        className="cursor-outline fixed top-0 left-0 w-[40px] h-[40px] border border-white/30 rounded-full z-[9998] pointer-events-none hidden -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
}
