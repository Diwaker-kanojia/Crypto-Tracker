import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../Functions/get100Coins";

const SelectCoin = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);

  const styles1 = {
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
  };
  const styles2 = {
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
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const fetchCoin = async () => {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  };

  return (
    <>
      <div className="flex justify-start items-center gap-2 dark:hidden">
        <p className="hidden lg:block capitalize">Crypto 1</p>
        <Select
          sx={styles1}
          value={crypto1.toLowerCase()}
          label="Crypto 1"
          onChange={(e) => handleCoinChange(e, false)}
        >
          {allCoins
            .filter((coin) => coin.id != crypto2.toLowerCase())
            .map((coin, index) => (
              <MenuItem key={index} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
        <p className="hidden lg:block capitalize">Crypto 2</p>
        <Select
          sx={styles1}
          value={crypto2.toLowerCase()}
          label="Crypto 2"
          onChange={(e) => handleCoinChange(e, true)}
        >
          {allCoins
            .filter((coin) => coin.id != crypto1.toLowerCase())
            .map((coin, index) => (
              <MenuItem key={index} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className="hidden justify-start items-center gap-2 dark:flex">
        <p className="hidden lg:block text-white capitalize">Crypto 1</p>
        <Select
          sx={styles2}
          value={crypto1.toLowerCase()}
          label="Crypto 1"
          onChange={(e) => handleCoinChange(e, false)}
        >
          {allCoins
            .filter((coin) => coin.id != crypto2.toLowerCase())
            .map((coin, index) => (
              <MenuItem key={index} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
        <p className="hidden lg:block capitalize text-white">Crypto 2</p>
        <Select
          sx={styles2}
          value={crypto2.toLowerCase()}
          label="Crypto 2"
          onChange={(e) => handleCoinChange(e, true)}
        >
          {allCoins
            .filter((coin) => coin.id != crypto1.toLowerCase())
            .map((coin, index) => (
              <MenuItem key={index} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
    </>
  );
};

export default SelectCoin;
