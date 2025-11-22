import { SPECS } from "@/data";

export default function Specs() {
  return (
    <section id="specs" className="py-32 relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-section">
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-4">
              {SPECS.heading.main}
            </h2>
            <div className="flex gap-4 text-xs font-mono text-white/40">
              <span>{SPECS.heading.hardware}</span>
              <span>{SPECS.heading.status}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {SPECS.metrics.map((metric, index) => (
            <div key={index} className="reveal-section">
              <div className="font-display text-5xl md:text-7xl mb-2 flex items-baseline">
                {metric.value}
                <span className={`text-2xl md:text-3xl ${metric.unitColor}`}>
                  {metric.unit}
                </span>
              </div>
              <p className="font-mono text-xs text-white/50 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
