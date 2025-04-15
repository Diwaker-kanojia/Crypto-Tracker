import { CircularProgress } from "@mui/material";
import React from "react";
const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full pt-20 bg-white dark:bg-black text- fixed z-[500]">
      <CircularProgress />
    </div>
  );
};

export default Loader;
