import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../utils/appSlice";

const Header = () => {
  const [panel, setPanel] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((store) => store.app.darkMode);

  const switchDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      className={
        panel
          ? "flex justify-between md:justify-around items-center pt-10 md:mb-10 md:mx-5"
          : "flex justify-between md:justify-around items-center pt-10 mb-10 mx-5"
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
        {!darkMode ? (
          <div onClick={switchDarkMode}>
            <DarkModeIcon fontSize="large" />
          </div>
        ) : (
          <div onClick={switchDarkMode}>
            <LightModeIcon fontSize="large" />
          </div>
        )}
      </ul>
      {!panel && (
        <div className="md:hidden flex gap-4">
          {!darkMode ? (
            <div onClick={switchDarkMode}>
              <DarkModeIcon />
            </div>
          ) : (
            <div onClick={switchDarkMode}>
              <LightModeIcon />
            </div>
          )}
          <div onClick={() => setPanel(true)}>
            <MenuIcon />
          </div>
        </div>
      )}
      {panel && (
        <div className="md:hidden bg-white w-screen h-screen pr-5 dark:bg-black">
          <div
            className="flex justify-end mb-4"
            onClick={() => setPanel(false)}
          >
            <CloseIcon />
          </div>
          <div className="w-screen h-screen z-10 pr-2">
            <ul className="flex flex-col gap-4 items-end text-xl">
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
