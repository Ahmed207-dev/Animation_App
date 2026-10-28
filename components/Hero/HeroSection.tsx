import BorderItem from "./BorderItem";
import ButtonHero from "./ButtonHero";
import Carsoul from "./Carsoul";
import CircleItem from "./CircleItem";

const HeroSection = () => {
  return (
    <section className="min-h-150 bg-blue-600">
      <div className="flex justify-between items-center flex-col lg:flex-row gap-9 my-10">
        <h1 className="mx-5 my-2 text-white/90 text-3xl md:text-6xl lg:text-9xl lg:w-190 font-extrabold">
          Interfaces that move with intent.
        </h1>
        <CircleItem />
      </div>
      <div className="flex justify-between items-center flex-col lg:flex-row gap-9">
        <p className="mx-5 my-2 text-white/80 md:w-150 ">
          I’m a front-end developer who builds animation with GSAP: timelines,
          scroll-driven stories and small details that make a page feel alive.
        </p>
        <div className="">
          <BorderItem />
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonHero />
      </div>
      <Carsoul />
    </section>
  );
};

export default HeroSection;
