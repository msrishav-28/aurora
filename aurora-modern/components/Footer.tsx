import { FOOTER } from "@/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(157,78,221,0.1),_transparent_50%)]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-8">
              {FOOTER.heading.line1}<br />{FOOTER.heading.line2}
            </h2>
            <p className="text-white/60 font-light max-w-md mb-8">
              {FOOTER.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={FOOTER.cta.contact.href}
                className="px-8 py-3 bg-white text-black font-mono text-xs font-bold hover:bg-accent hover:text-white transition-all duration-300 cursor-none-target text-center"
              >
                {FOOTER.cta.contact.label}
              </a>
              <Link
                href={FOOTER.cta.whitepaper.href}
                className="px-8 py-3 border border-white/20 font-mono text-xs font-bold hover:bg-white/10 transition-all duration-300 cursor-none-target text-center"
              >
                {FOOTER.cta.whitepaper.label}
              </Link>
            </div>
          </div>

          <div className="md:text-right flex flex-col justify-end">
            <div className="font-display text-2xl mb-4">
              {FOOTER.credits.university}
            </div>
            <div className="font-mono text-sm text-white/40 mb-6">
              {FOOTER.credits.people.map((person, index) => (
                <p key={index}>{person}</p>
              ))}
            </div>
            <div className="text-accent font-mono text-lg">
              {FOOTER.credits.phone}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/30">
          <p>{FOOTER.copyright}</p>
          <div className="flex gap-6">
            {FOOTER.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white transition-colors cursor-none-target"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
