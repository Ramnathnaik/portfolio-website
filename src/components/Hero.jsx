import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <div className="mx-5 my-36 flex justify-center gap-56">
      <img
        className="hidden md:block rounded-full w-96 shadow-2xl"
        src="/document.jpeg"
        alt="protfolio"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold">
          <p className="md:text-xl text-gray-600 my-2">Hello I'm</p>
          <h1 className="text-4xl md:text-6xl my-2">K P Ramanath</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 my-2">
            Full Stack Developer
          </h2>
        </div>
        <div className="my-2 font-semibold">
          <button className="border-2 border-black py-2 md:py-3 px-3 md:px-5 rounded-full m-3">
            Download CV
          </button>
          <button className="border-2 border-black bg-black text-white py-2 md:py-3 px-3 md:px-5 rounded-full m-3">
            Contact Info
          </button>
        </div>
        <div className="my-2 flex gap-4">
          <GitHubIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
