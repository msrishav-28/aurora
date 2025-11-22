"use client";

import { VISION } from "@/data";

export default function Vision() {
  return (
    <section id="vision" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-section opacity-0">
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              {VISION.heading.line1} <br />
              <span className="text-white/30">{VISION.heading.line2}</span>
            </h2>
            <p className="text-white/70 text-lg font-light mb-8 leading-relaxed">
              {VISION.description}
            </p>
            <blockquote className="pl-6 border-l-2 border-accent italic text-xl text-white font-light mb-8">
              {VISION.quote}
            </blockquote>

            <div className="flex gap-4">
              {VISION.features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2">
                  <span className={`w-2 h-2 ${feature.color} rounded-full`}></span>
                  <span className="font-mono text-xs text-white/60">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[500px] reveal-section opacity-0">
            {/* Abstract Graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-void to-subtle rounded-2xl border border-white/10 overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={VISION.image}
                alt="AI Neural Network"
                className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent"></div>

              {/* Floating Card inside image */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-xl border-l-4 border-accent">
                <div className="font-mono text-accent text-xs mb-2">
                  {VISION.mission.label}
                </div>
                <p className="font-sans text-lg">
                  {VISION.mission.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
