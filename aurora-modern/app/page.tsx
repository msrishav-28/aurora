"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Tech from "@/components/Tech";
import Specs from "@/components/Specs";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    initAnimations();
  };

  const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Reveal
    gsap.from(".reveal-hero", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "power4.out",
    });

    // Section Headers & Content
    gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });

    // Architecture Cards (Staggered)
    gsap.from(".reveal-card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#tech",
        start: "top 75%",
      },
    });

    // Roadmap Cards (Horizontal Stagger)
    gsap.from(".reveal-card-h", {
      x: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".reveal-card-h",
        start: "top 85%",
      },
    });
  };

  return (
    <main className="min-h-screen bg-void text-white selection:bg-accent selection:text-white">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <CustomCursor />
      <Navigation />
      <Hero />
      <Vision />
      <Tech />
      <Specs />
      <Roadmap />
      <Footer />
    </main>
  );
}
