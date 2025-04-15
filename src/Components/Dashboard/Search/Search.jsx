import { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Search = ({ search, onSearchChange }) => {
  return (
    <div className="flex justify-start items-center gap-6 py-4 px-4 sm:px-12 text-grey bg-[#f3f3f3] dark:bg-darkgrey w-[80%] mx-auto m-4 rounded-[3rem] text-[1.2rem]">
      <SearchRoundedIcon />
      <input
        className="bg-transparent w-full font-['Inter'] text-[1.2rem] border-none outline-none text-grey"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
};

export default Search;
