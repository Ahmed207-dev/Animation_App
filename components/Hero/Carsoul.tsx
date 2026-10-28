"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Data = [
  { name: "Stagger" },
  { name: "Easing" },
  { name: "Timelines" },
  { name: "ScrollTrigger" },
];

const Carsoul = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 12,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const duplicatedData = [...Data, ...Data];

  return (
    <div className="bg-yellow-300 -rotate-1 py-2 overflow-hidden mt-5 w-full">
      <div ref={trackRef} className="flex gap-4 md:gap-8 w-max">
        {duplicatedData.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-8 shrink-0"
          >
            <span className="text-xl md:text-2xl lg:text-4xl font-black text-slate-900 uppercase">
              {item.name}
            </span>
            <span className="w-5 h-5 rounded-full bg-blue-600"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carsoul;
