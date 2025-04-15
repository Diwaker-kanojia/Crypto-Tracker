import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import Drawer from "./Drawer/MobileDrawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const navLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Compare",
    link: "/compare",
  },
];
const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-3 sm:px-6 sm:py-5 md:px-8 md:py-5 shadow-md flex justify-between items-center dark:bg-black dark:text-white bg-white z-50 dark:shadow-gray-900">
      {/* logo  */}
      <h1 className="text-2xl sm:text-3xl font-bold">
        CryptoTracker<span className="text-blue text-3xl rounded-full">.</span>
      </h1>
      {/* nav links */}
      <div className="hidden lg:flex gap-6 lg:items-center justify-between">
        {/* theme toggler */}
        <DarkMode />
        <ul className="flex gap-5 justify-end items-center">
          {navLink.map((item, index) => (
            <Link
              key={index}
              className="font-semibold text-grey hover:text-black dark:hover:text-white transition-all duration-300"
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/dashboard">
            <Button text={"Dashboard"} outline={false} />
          </Link>
        </ul>
      </div>
      <div className="block lg:hidden ">
        <Drawer />
      </div>
    </nav>
  );
};

export default Header;
