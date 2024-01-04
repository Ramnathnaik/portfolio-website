import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="mt-24 mx-4 md:mx-36 text-center font-semibold flex flex-col items-center">
      <p className="text-gray-600 my-2">Get In Touch</p>
      <h1 className="text-4xl md:text-6xl my-2">Contact Me</h1>
      <div className="border-2 border-gray-400 px-6 py-4 m-4 rounded-3xl flex justify-around md:w-1/3 mt-12 mb-52 gap-4">
        <div>
          <MailIcon fontSize="large" />
          <h1 className="hidden md:block text-xl ml-2">Gmail</h1>
        </div>
        <div>
          <LinkedInIcon fontSize="large" />
          <h1 className="hidden md:block text-xl ml-2">LinkedIn</h1>
        </div>
      </div>
      <div>
        <ul className="flex md:flex-row flex-col gap-4 justify-around text-xl md:text-2xl font-normal">
          <li className="mx-5">X (Twitter)</li>
          <li className="mx-5">HackerRank</li>
          <li className="mx-5">Github</li>
        </ul>
      </div>
      <p className="font-normal mt-24 mb-12 text-gray-600 text-xs md:text-base">
        Copyright &copy; 2024 K P Ramanath. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
