"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { NAVIGATION } from "@/data";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.3,
      });
      
      const links = mobileLinksRef.current?.children;
      if (links) {
        gsap.fromTo(
          links,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
        );
      }
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="mobile-menu fixed inset-0 bg-void z-[9990] flex flex-col justify-center items-center opacity-0 pointer-events-none glass-card backdrop-blur-xl"
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 font-mono text-white/50 hover:text-white cursor-none-target"
        >
          [CLOSE]
        </button>
        <nav ref={mobileLinksRef} className="flex flex-col gap-8 text-center">
          {NAVIGATION.links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={toggleMenu}
              className="mobile-link font-display text-3xl hover:text-accent transition-colors cursor-none-target"
            >
              {item.label}
            </Link>
          ))}
          <Link
              href={NAVIGATION.cta.href}
              onClick={toggleMenu}
              className="mobile-link font-display text-3xl hover:text-accent transition-colors cursor-none-target"
            >
              {NAVIGATION.cta.label}
            </Link>
        </nav>
        <div className="absolute bottom-10 font-mono text-xs text-white/30">
          {NAVIGATION.mobileMenuId}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="glass-nav fixed w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300">
        <Link
          href="#"
          className="font-display font-bold text-xl tracking-wider hover:text-accent transition-colors cursor-none-target z-50 relative"
        >
          {NAVIGATION.logo.text}<span className="text-accent">{NAVIGATION.logo.accent}</span>
        </Link>

        <div className="hidden md:flex gap-10 font-mono text-[11px] tracking-widest text-white/60">
          {NAVIGATION.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors cursor-none-target group relative"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <Link
          href={NAVIGATION.cta.href}
          className="hidden md:block px-6 py-2 border border-white/20 font-mono text-xs hover:bg-white hover:text-black transition-all duration-300 cursor-none-target"
        >
          {NAVIGATION.cta.label}
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden font-mono text-xs text-accent cursor-none-target z-50 relative p-2"
        >
          [MENU]
        </button>
      </nav>
    </>
  );
}
