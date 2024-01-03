import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  return (
    <div className="mx-36 text-center font-semibold">
      <p className="text-gray-600 my-2">Get to Know More</p>
      <h1 className="text-6xl my-2">About Me</h1>
      <div className="flex justify-center my-24 items-center">
        <img
          className="w-96 rounded-2xl shadow-2xl"
          src="/document.jpeg"
          alt="About Me"
        />
        <div className="flex items-center flex-col">
          <div className="flex justify-evenly gap-2">
            <div className="w-80 h-48 p-10 border-2 border-gray-400 m-2 rounded-2xl">
              <WorkspacePremiumIcon fontSize="large" />
              <h1 className="text-2xl my-1">Experience</h1>
              <p className="text-gray-600 my-1">3+ years</p>
              <p className="text-gray-600 my-1">Full Stack Developer</p>
            </div>
            <div className="w-80 h-48 p-10 border-2 border-gray-400 m-2 rounded-2xl">
              <SchoolIcon fontSize="large" />
              <h1 className="text-2xl my-1">Education</h1>
              <p className="text-gray-600 my-1">B.E Bachelors Degree</p>
              <p className="text-gray-600 my-1">CMR Institute of Technology</p>
            </div>
          </div>
          <div className="mt-5 grid items-start w-4/5 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              exercitationem numquam provident nobis corrupti explicabo expedita
              possimus corporis iste natus debitis odio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
