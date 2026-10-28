"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Good motion explains what changed, guides the eye to what matters next, and never makes people wait. Scroll slowly and watch these words arrive.";

const Info = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = text.split(" ");

  useGSAP(
    () => {
      gsap.fromTo(
        ".word",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="min-h-100 flex justify-center items-center p-8"
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 max-w-5xl leading-relaxed">
        {words.map((word, index) => (
          <span
            key={index}
            className="word inline-block mr-2 md:mr-3 opacity-15"
          >
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Info;
