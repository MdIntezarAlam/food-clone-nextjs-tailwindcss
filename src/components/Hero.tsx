import React from "react";
import Image from "next/image";
import hero2 from "../../public/hero2.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px]  h-auto absolute  right-0 top-0 -z-10"
        src={hero2}
        alt="Picture of the author"
        width={1000}
        height={600}
      />
      <Navbar />

      <div className="container  h-[calc(100vh-120px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98]  w-filt p-4">
          <p className="uppercase font-medium "> wide options of choice</p>
          <h2 className="text-4xl  sm:text-6xl font-bold text-black"> Delicios
            <span className=" text-orange-900 ">food</span>
          </h2>

          <p className="text-gray-700 text-[14px] sm:text-[16px]">Delicios food color, aronma and testa
            <br />
            what are you waiting for
          </p>
          <button className="bg-yellow-400 rounded-3xl w-44 font-bold text-white px-6 py-2 text-[14px] sm:text[16px] cursor-pointer">view more</button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
