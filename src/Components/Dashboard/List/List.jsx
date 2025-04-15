import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

import { Link } from "react-router-dom";
import { convertNumbers } from "../../../Functions/ConvertNumber";
const List = ({ coin, delay }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className="flex justify-normal  md:justify-between items-center gap-4 md:gap-2 lg:pr-2 hover:bg-[#f3f3f3] dark:hover:bg-darkgrey  transition-all duration-300 rounded-2xl cursor-pointer"
      >
        {/* Image  */}
        <Tooltip title="coin Logo" placement="bottom-start">
          <td className="flex justify-start items-center lg:m-6 text-left md:mr-[1.5rem]">
            <img
              className="size-8 sm:size-12 md:size-12 lg:size-14"
              src={coin.image}
              alt={coin.id}
            />
          </td>
        </Tooltip>
        {/* Coin Info */}
        <Tooltip title="coin Info" placement="bottom-start">
          <td className="w-[18%] text-left">
            <div className="flex flex-col gap-1">
              <p className="text-black dark:text-white uppercase font-semibold text-xs md:text-lg m-0">
                {coin.symbol}
              </p>
              <p className="text-grey capitalize font-light text-sm md:text-[1rem] m-0">
                {coin.name}
              </p>
            </div>
          </td>
        </Tooltip>
        {/* Price change in 24 hr */}
        <Tooltip title="Price Change In 24hr" placement="bottom-start">
          <td className="hidden md:flex justify-start items-center gap-4 ml-6 w-[18%] text-left">
            <div
              className={
                coin.price_change_percentage_24h > 0
                  ? "border-2 border-green rounded-[2rem] py-[5.6px] px-5 text-center font-semibold text-green text-[1.1rem] min-w-16 hover:bg-green hover:text-black dark:hover:bg-green dark:hover:text-white transition-all ease-in duration-300"
                  : "border-2 border-red rounded-[2rem] py-[5.6px] px-5 text-center font-semibold text-red text-[1.1rem] min-w-16 hover:bg-red hover:text-black dark:hover:bg-red dark:hover:text-white transition-all ease-in duration-300 "
              }
            >
              {Number(coin.price_change_percentage_24h).toFixed(2)}%
            </div>
            <div className="hidden lg:block">
              {coin.price_change_percentage_24h > 0 ? (
                <div className="border-2 border-green rounded-[50%] !w-8 !h-8 flex justify-center items-center text-green text-[1.1] hover:bg-green hover:text-black dark:hover:bg-green dark:hover:text-white transition-all ease-in duration-300">
                  <TrendingUpRoundedIcon />
                </div>
              ) : (
                <div className="border-2 border-red rounded-[50%] !w-8 !h-8  flex justify-center items-center text-red text-[1.1] hover:bg-red hover:text-black dark:hover:bg-red dark:hover:text-white transition-all ease-in duration-300 ">
                  <TrendingDownRoundedIcon />
                </div>
              )}
            </div>
          </td>
        </Tooltip>
        {/* Current price */}
        <Tooltip title="Current Price" placement="bottom-start">
          <td className="w-[18%] text-left">
            <div className="m-6">
              <h3
                className={`text-sm sm:text-lg md:text-xl font-semibold ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green"
                    : "text-red"
                }`}
              >
                ${Math.round(coin.current_price).toLocaleString("en", "IND")}
              </h3>
            </div>
          </td>
        </Tooltip>
        {/* Total Volume */}
        <Tooltip title="Total Volume" placement="bottom-start">
          <td className="hidden md:flex w-[18%] text-left">
            <div className="ml-6 text-grey text-sm font-semibold">
              <p className="hidden lg:block">
                ${coin.total_volume.toLocaleString("en", "IND")}
              </p>
              <p className="block lg:hidden text-end">
                ${convertNumbers(coin.total_volume)}
              </p>
            </div>
          </td>
        </Tooltip>
        {/* Total Market cap */}
        <Tooltip title=" Market Cap" placement="bottom-start">
          <td className="flex w-[18%] text-left">
            <div className="ml-6 text-grey text-sm font-semibold">
              <p className="hidden lg:block">
                ${coin.market_cap.toLocaleString()}
              </p>
              <p className="block lg:hidden text-end">
                ${convertNumbers(coin.market_cap)}
              </p>
            </div>
          </td>
        </Tooltip>
      </motion.tr>
    </Link>
  );
};

export default List;
