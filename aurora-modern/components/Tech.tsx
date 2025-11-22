"use client";

import { TECH } from "@/data";

export default function Tech() {
  return (
    <section id="tech" className="py-32 bg-subtle/30 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 reveal-section opacity-0">
          <p className="font-mono text-accent text-xs tracking-widest mb-4">
            {TECH.heading.sub}
          </p>
          <h2 className="font-display text-4xl md:text-6xl">
            {TECH.heading.main}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TECH.cards.map((card, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group reveal-card opacity-0 cursor-none-target ${
                index === 1 ? "mt-0 md:-mt-8" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div
                  className={`font-display text-4xl text-white/10 ${card.hoverClass} transition-colors`}
                >
                  {card.id}
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                  <svg
                    className={`w-4 h-4 ${card.colorClass}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {card.iconPath}
                  </svg>
                </div>
              </div>
              <h3
                className={`font-display text-xl mb-2 ${card.hoverClass} transition-colors`}
              >
                {card.title}
              </h3>
              <p className="font-mono text-xs text-white/50 mb-4 uppercase">
                {card.subtitle}
              </p>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
