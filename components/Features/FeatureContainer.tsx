"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FeatureContainer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getDistance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="h-screen w-full overflow-hidden bg-blue-900 text-white"
    >
      <div ref={trackRef} className="flex h-full w-max items-center">
        <div className="flex h-full w-screen shrink-0 items-center justify-center p-12">
          <div className="max-w-xl text-center">
            <h2 className="mb-4 text-6xl font-bold">Easing</h2>
            <p className="text-xl text-blue-200">
              The same distance and duration feel completely different depending
              on the curve.
            </p>
          </div>
        </div>

        <div className="flex h-full w-screen shrink-0 items-center justify-center p-12">
          <div className="max-w-xl text-center">
            <h2 className="mb-4 text-6xl font-bold">Stagger</h2>
            <p className="text-xl text-blue-200">
              Animate elements sequentially to create visual hierarchy.
            </p>
          </div>
        </div>

        <div className="flex h-full w-screen shrink-0 items-center justify-center p-12">
          <div className="max-w-xl text-center">
            <h2 className="mb-4 text-6xl font-bold">ScrollTrigger</h2>
            <p className="text-xl text-blue-200">
              Control animations based on scroll position seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureContainer;
