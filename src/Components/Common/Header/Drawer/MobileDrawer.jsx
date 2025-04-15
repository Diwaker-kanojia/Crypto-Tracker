import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import { IconButton } from "@mui/material";
import DarkMode from "../../DarkMode/DarkMode";
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
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];
export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="text-grey text-2xl hover:text-white" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <ul className="w-[40vw] h-[100vh] flex flex-col
         items-start gap-3 dark:bg-[rgb(17,24,39)] p-4 py-6">
          {navLink.map((item, index) => (
            <Link
              key={index}
              className="font-semibold text-grey hover:text-black dark:hover:text-white hover:translate-x-1 transition-all duration-300"
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex justify-start items-center">
            <DarkMode />
          </div>
        </ul>
      </Drawer>
    </div>
  );
}
