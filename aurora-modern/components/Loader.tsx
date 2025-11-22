"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (loaderRef.current) {
            gsap.to(loaderRef.current, {
              yPercent: -100,
              duration: 1,
              ease: "power4.inOut",
              onComplete: onComplete,
            });
          }
        },
      });

      tl.to(barRef.current, {
        width: "100%",
        duration: 1.2,
        ease: "power2.inOut",
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader fixed inset-0 bg-void z-[10000] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="font-display font-bold text-2xl tracking-widest animate-pulse">AURORA</div>
        <div className="w-64 h-[1px] bg-white/10 rounded-full overflow-hidden">
          <div ref={barRef} className="h-full bg-accent w-0"></div>
        </div>
        <div className="font-mono text-[10px] text-white/50">INITIALIZING SYSTEMS...</div>
      </div>
    </div>
  );
}
