import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Common/Laoder/Loader";
import { coinObject } from "../Functions/convertObjects.js";
import List from "../Components/Dashboard/List/List";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import { getCoinsData } from "../Functions/getCoinData.js";
import { getCoinsPrices } from "../Functions/getCoinPrices.js";
import LineChart from "../Components/Coin/LineChart/LineChart";
import { ConvertDate } from "../Functions/convertDate";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import { settingchartData } from "../Functions/settingChartData.js";
import PriceType from "../Components/Coin/TogglePrice/PriceType";
import { motion } from "framer-motion";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    const data = await getCoinsData(id);
    if (data) {
      coinObject(setCoinData, data);
    }
    const prices = await getCoinsPrices(id, days, priceType);
    if (prices.length > 0) {
      settingchartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinsPrices(id, event.target.value, priceType);
    if (prices.length > 0) {
      settingchartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinsPrices(id, days, newType);
    if (prices.length > 0) {
      settingchartData(setChartData, prices);
      setIsLoading(false);
    }
  };
  return (
    <div className="pt-20 dark:bg-black flex flex-col items-center p-2 lg:px-0 sm:items-stretch gap-3 sm:gap-0">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="block w-full md:w-[95%] lg:w-[95%] bg-[#f3f3f3] dark:bg-darkgrey md:my-6  md:mx-5 lg:mx-auto rounded-xl pl-2">
            <List coin={coinData} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="block w-full md:w-[95%] lg:w-[95%] bg-[#f3f3f3] dark:bg-darkgrey   md:mx-5 lg:mx-auto rounded-xl p-4"
          >
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </motion.div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
