import React from "react";
import { aboutDetails } from "../utils/constants";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div id="about" className="mx-4 md:mx-36 text-center font-semibold">
      <p className="text-gray-600 dark:text-gray-300 my-2">Get to Know More</p>
      <h1 className="text-4xl md:text-6xl my-2">About Me</h1>
      <div className="flex justify-center my-12 md:my-24 items-center">
        <img
          className="hidden md:block w-96 rounded-2xl shadow-2xl"
          src="/profile-pic-1.png"
          alt="About Me"
        />
        <div className="flex items-center flex-col">
          <div className="flex flex-col md:flex-row justify-evenly gap-2">
            {aboutDetails.map((item) => (
              <AboutCard
                key={item.id}
                icon={item.icon}
                line1={item.line1}
                line2={item.line2}
                line3={item.line3}
              />
            ))}
          </div>
          <div className="mt-5 grid items-start w-4/5 text-gray-600 dark:text-gray-300">
            <p>
              Full stack software developer with expertise in front-end and
              back-end development, experienced in leading cross-functional
              teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
