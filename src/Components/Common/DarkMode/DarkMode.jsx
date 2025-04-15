import React, { useEffect, useState } from "react";
import LightPng from "../../../assets/DarkMode/light-mode-button.png";
import DarkPng from "../../../assets/DarkMode/dark-mode-button.png";
import toast from "react-hot-toast";
import { Switch } from "@mui/material";
const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );
  const element = document.documentElement;
  useEffect(() => {
    if (darkMode) {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative">
      <Switch
        checked={darkMode}
        onClick={() => {
          setDarkMode(!darkMode);
          toast.success(darkMode ? "Light Mode" : "Dark Mode");
        }}
      />
    </div>
  );
};
export default DarkMode;
