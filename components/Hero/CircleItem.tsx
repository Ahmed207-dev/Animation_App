"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const CircleItem = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!circleRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      circleRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * 0.35;
    const deltaY = (clientY - centerY) * 0.35;

    gsap.to(circleRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!circleRef.current) return;

    gsap.to(circleRef.current, {
      x: 0,
      y: 0,
      duration: 2,
      ease: "elastic.out",
    });
  };
  useEffect(() => {
    gsap.to(".circle", {
      y: -30,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div
      ref={circleRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="circle md:mr-10 my-2 w-60 h-60 rounded-full bg-yellow-300"
    ></div>
  );
};

export default CircleItem;
