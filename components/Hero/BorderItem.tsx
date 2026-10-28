"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { IoTriangleSharp } from "react-icons/io5";

const BorderItem = () => {
  useEffect(() => {
    gsap.to(".box", {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".triangle", {
      rotation: 80,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="box md:mr-10 my-2 w-30 h-30 border-4 border-white"></div>
      <div>
        <IoTriangleSharp
          className="triangle md:mr-10 my-2  text-white"
          size={150}
        />
      </div>
    </div>
  );
};

export default BorderItem;
