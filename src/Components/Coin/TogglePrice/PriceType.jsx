import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function PriceType({ priceType, handlePriceTypeChange }) {
  return (
    <>
      <div className="flex justify-center items-center m-4">
        <ToggleButtonGroup
          value={priceType}
          exclusive
          onChange={handlePriceTypeChange}
          sx={{
            "&.Mui-selected": {
              color: "#3a80e9 !important",
            },
            borderColor: "#3a80e9 !important",
            border: "unset !important",
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid #3a80e9 !important",
              borderColor: "unset",
              color: "#3a80e9 !important ",
            },
            "& .MuiToggleButton-standard": {
              color: "#3a80e9 !important",
            },
          }}
        >
          <ToggleButton value="prices">Price</ToggleButton>
          <ToggleButton value="market_caps">Market Cap</ToggleButton>
          <ToggleButton value="total_volumes">Total Volume</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
}
