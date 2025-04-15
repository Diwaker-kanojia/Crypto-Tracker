import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Grid = ({ coin, delay }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={`w-[300px] sm:w-[340px] md:w-[300px] xl:w-[340px] h-[300px] sm:h-[340px] md:h-[300px] xl:h-[340px] dark:bg-darkgrey border-2 border-[#f3f3f3] dark:border-darkgrey rounded-xl bg-[#f3f3f3] mb-4  ${
          coin.price_change_percentage_24h > 0
            ? "hover:border-green dark:hover:border-green transition-all duration-300"
            : "hover:border-red dark:hover:border-red transition-all duration-300"
        }  cursor-pointer`}
      >
        <div className="flex justify-start items-center gap-4 m-6">
          <img className="size-14" src={coin.image} alt={coin.id} />
          <div className="flex flex-col gap-1">
            <p className="text-black dark:text-white uppercase font-semibold text-lg m-0">
              {coin.symbol}
            </p>
            <p className="text-grey capitalize font-light text-[1rem] m-0">
              {coin.name}
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 ml-6">
          <div
            className={
              coin.price_change_percentage_24h > 0
                ? "border-2 border-green rounded-[2rem] py-[5.6px] px-5 text-center font-semibold text-green text-[1.1rem] min-w-16 hover:bg-green hover:text-black dark:hover:bg-green dark:hover:text-white transition-all ease-in duration-300"
                : "border-2 border-red rounded-[2rem] py-[5.6px] px-5 text-center font-semibold text-red text-[1.1rem] min-w-16 hover:bg-red hover:text-black dark:hover:bg-red dark:hover:text-white transition-all ease-in duration-300 "
            }
          >
            {Number(coin.price_change_percentage_24h).toFixed(2)}%
          </div>
          <div>
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
        </div>
        <div className="m-6">
          <h3
            className={`text-xl font-semibold ${
              coin.price_change_percentage_24h > 0 ? "text-green" : "text-red"
            }`}
          >
            ${coin.current_price.toLocaleString("en", "IND")}
          </h3>
        </div>
        <div className="ml-6 text-grey text-sm font-semibold">
          <p className="total-volume">
            Total Volume : ${coin.total_volume.toLocaleString("en", "IND")}
          </p>
          <p className="total-market">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Grid;
