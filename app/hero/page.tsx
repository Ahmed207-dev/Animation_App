import { useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(TextPlugin);
const Hero = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      duration: 1,
      text: `Ahmed_Hamdy`,
      ease: "none",
      delay: 0.5,
    });
  });
  return (
    <div className="flex justify-center gap-4 m-4 items-center">
      <h1
        ref={textRef}
        className="text-black font-bold text-4xl min-w-[11ch]"
      ></h1>
      <div className="bg-black w-50 h-50 rounded-xl"></div>
    </div>
  );
};

export default Hero;
