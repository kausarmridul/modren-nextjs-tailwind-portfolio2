"use client";
import { assets } from "@/app/assets";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src={assets.c6}
          alt="HeroImage"
          width={150}
          height={150}
          data-aos="fade-up"
          className="rounded-full border-8 border-col-3"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-black tracking-wide"
        >
          Creating web products, <br />
          brands,
          <span className="text-cyan-200"> and experiences.</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi! I&apos;m Sajal - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  " Frontend Developer",
                  " Backend Developer",
                  " Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-3.5 bg-blue-800 hover:bg-blue-900 transition-all delay-300 rounded-full text-lg font-medium"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
