import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/Hero/HeroSection";
import Info from "@/components/Info/Info";
import FeatureContainer from "@/components/Features/FeatureContainer";
import Contact from "@/components/Contact/Contact";
import GSAPRefresh from "@/components/utils/GSAPRefresh";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <HeroSection />
      <GSAPRefresh />;
      <Info />
      <FeatureContainer />
      <Contact />
    </main>
  );
}
