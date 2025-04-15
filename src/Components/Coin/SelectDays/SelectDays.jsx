import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
export default function SelectDays({ days, handleDaysChange, noPtag }) {
  return (
    <>
      <div className="flex justify-start items-center gap-2 dark:hidden">
        {!noPtag && (
          <p className="text-black text-sm sm:text-[16px]  hidden lg:block">
            Price Change In
          </p>
        )}
        <Select
          sx={{
            height: "2.5rem",
            color: "#111",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#111",
            },
            "& .MuiSvgIcon-root": {
              color: "#111",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
      </div>
      <div className="justify-start items-center gap-2  hidden dark:flex">
        {!noPtag && (
          <p className="text-white text-sm sm:text-[16px]  hidden lg:block">
            Price Change In
          </p>
        )}
        <Select
          sx={{
            height: "2.5rem",
            color: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "& .MuiSvgIcon-root": {
              color: "#fff",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
      </div>
    </>
  );
}
