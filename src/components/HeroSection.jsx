import React from "react";
import heroImg from "../assets/heroimg.svg";

const HeroSection = () => (
  <div className="flex flex-col mt-10 m-4 md:flex-row-reverse ">
    <div className="md:w-1/2">
      <img
        src={heroImg}
        alt="image"
        className="mx-auto md:block lg:scale-150 lg:mt-32 lg:mb-0"
      />
    </div>
    <div className="md:w-1/2 ">
      <div
        className=" lg:pt-14 flex flex-col lg:ml-20 lg:mr-20 
       mt-12"
      >
        <h1 className=" lg:pb-5 text-3xl font-serif lg:text-5xl">
          Hello I'm{" "}
          <span className="text-3xl lg:text-5xl  font-sora font-bold ml-2">
            Amit Pramanik.
          </span>
        </h1>
        <p className="lg:pb-5 text-3xl font-sora font-bold lg:text-5xl">
          Frontend{" "}
          <span className="text-3xl font-code font-bold  lg:text-5xl ">
            Developer
          </span>
        </p>
        <p className="text-3xl lg:text-5xl">
          Based In{" "}
          <span className="text-3xl font-sora font-bold lg:text-5xl">
            India.
          </span>
        </p>
      </div>
      <p className=" lg:ml-20 text-base mt-4 text-customGray md:mt-12">
        I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to specimen book.
      </p>
      <div className=" lg:ml-20 flex flex-col items-start justify-start mt-4 space-x-4 md:mt-12">
        <div className="flex space-x-4 mt-5 lg:pt- items-start">
          <img
            className=" lg:h-14 lg:w-14 cursor-pointer h-12 w-12 md:block"
            src="src/assets/github.svg"
            alt="Github"
          />
          <img
            className="cursor-pointer lg:h-14 lg:w-14 h-12 w-12 md:block"
            src="src/assets/x.svg"
            alt="X"
          />
          <img
            className="cursor-pointer lg:h-14 lg:w-14 h-12 w-12 md:block"
            src="src/assets/linkedin.svg"
            alt="LinkedIn"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
