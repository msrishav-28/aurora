import { ROADMAP } from "@/data";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 reveal-section opacity-0">
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            {ROADMAP.heading}
          </h2>
          <p className="text-white/60 text-lg">{ROADMAP.subheading}</p>
        </div>

        <div className="space-y-8">
          {ROADMAP.phases.map((phase, index) => (
            <div
              key={index}
              className={`group relative pl-8 border-l border-white/10 hover:border-accent transition-colors duration-500 reveal-card-h opacity-0`}
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-void border border-white/30 rounded-full group-hover:bg-accent group-hover:border-accent transition-colors duration-500"></div>
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <span
                    className={`font-mono text-xs ${phase.colorClass} mb-2 block`}
                  >
                    {phase.id}
                  </span>
                  <h3 className="font-display text-2xl">{phase.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-white/60 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2 justify-end">
                  {phase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-white/40 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
