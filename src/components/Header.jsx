import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [panel, setPanel] = useState(false);

  return (
    <div
      className={
        panel
          ? "flex justify-between md:justify-around items-center md:my-10 md:mx-5"
          : "flex justify-between md:justify-around items-center my-10 mx-5"
      }
    >
      <h1
        className={
          panel
            ? "hidden md:block font-semibold text-xl md:text-3xl"
            : "font-semibold text-xl md:text-3xl"
        }
      >
        Ramanath
      </h1>
      <ul className="hidden md:flex justify-around text-2xl">
        <li className="mx-5">About</li>
        <li className="mx-5">Experience</li>
        <li className="mx-5">Projects</li>
        <li className="mx-5">Contact</li>
      </ul>
      {!panel && (
        <div className="md:hidden" onClick={() => setPanel(true)}>
          <MenuIcon />
        </div>
      )}
      {panel && (
        <div className="md:hidden bg-white w-screen h-screen">
          <div
            className="flex justify-end m-4 p-4"
            onClick={() => setPanel(false)}
          >
            <CloseIcon />
          </div>
          <div className="w-screen h-screen z-10">
            <ul className="flex flex-col gap-4 items-end m-4 p-4 text-xl">
              <li className="mx-5">About</li>
              <li className="mx-5">Experience</li>
              <li className="mx-5">Projects</li>
              <li className="mx-5">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
