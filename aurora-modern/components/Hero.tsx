"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { HERO } from "@/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation is triggered by the parent or global loader, 
    // but we can set up the initial state here.
    // The actual trigger will be handled by the main page's initAnimations function
    // or we can expose a ref/method.
    // For now, we assume the parent will target ".reveal-hero" class.
  }, []);

  return (
    <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-aurora-gradient animate-pulse duration-[8000ms]"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10 text-center mt-10">
        <div className="overflow-hidden mb-6 flex justify-center">
          <div className="border border-white/10 px-4 py-1 rounded-full glass-card reveal-hero">
            <p className="font-mono text-accent text-[10px] md:text-xs tracking-ultra uppercase">
              {HERO.id}
            </p>
          </div>
        </div>

        <h1 className="font-display font-bold leading-none mb-8">
          <div className="overflow-hidden">
            <span className="block text-5xl md:text-8xl lg:text-9xl reveal-hero">
              {HERO.title.line1}
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="block text-5xl md:text-8xl lg:text-9xl reveal-hero gradient-text pb-4">
              {HERO.title.line2}
            </span>
          </div>
        </h1>

        <div className="max-w-2xl mx-auto overflow-hidden">
          <p className="font-sans font-light text-white/70 text-lg md:text-xl leading-relaxed reveal-hero">
            {HERO.description}
          </p>
        </div>

        <div className="mt-12 reveal-hero">
          <Link
            href="#vision"
            className="group flex flex-col items-center gap-2 cursor-none-target"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:text-accent transition-colors"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-white/40">
              {HERO.scrollText}
            </span>
          </Link>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full blur-[2px] opacity-50 animate-bounce delay-75"></div>
      <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-cyan rounded-full blur-[1px] opacity-70 animate-pulse"></div>
    </header>
  );
}
