import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around my-10 mx-5">
      <h1 className="font-semibold text-3xl">Ramanath</h1>
      <ul className="flex justify-around text-2xl">
        <li className="mx-5">About</li>
        <li className="mx-5">Experience</li>
        <li className="mx-5">Projects</li>
        <li className="mx-5">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
