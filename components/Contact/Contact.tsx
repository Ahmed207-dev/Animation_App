"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-reveal]", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
      });
    },
    { scope: ref },
  );

  const move = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    gsap.to(e.currentTarget, {
      x: (e.clientX - r.left - r.width / 2) * 0.35,
      y: (e.clientY - r.top - r.height / 2) * 0.35,
      duration: 0.4,
    });
  };
  const leave = (e: React.MouseEvent<HTMLAnchorElement>) =>
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.9,
      ease: "elastic.out(1,.35)",
    });

  return (
    <section
      ref={ref}
      id="Contact"
      className="flex min-h-screen items-center justify-center bg-yellow-300 px-6 text-center text-blue-900"
    >
      <div>
        <h2
          data-reveal
          className="text-6xl font-extrabold tracking-tight md:text-8xl"
        >
          Let’s animate something.
        </h2>
        <a
          data-reveal
          href="mailto:ahmedhamdy20702@gmail.com"
          onMouseMove={move}
          onMouseLeave={leave}
          className="mt-10 inline-block rounded-full bg-blue-600 px-8 py-4 text-white"
        >
          ahmedhamdy20702@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
