import React, { useEffect, useState } from "react";
import SelectCoin from "../Components/Compare/SelectCoins/SelectCoin";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import { getCoinsData } from "../Functions/getCoinData.js";
import { coinObject } from "../Functions/convertObjects.js";
import { getCoinsPrices } from "../Functions/getCoinPrices.js";
import Loader from "../Components/Common/Laoder/Loader";
import List from "../Components/Dashboard/List/List";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import { settingchartData } from "../Functions/settingChartData";
import LineChart from "../Components/Coin/LineChart/LineChart";
import PriceType from "../Components/Coin/TogglePrice/PriceType";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("Bitcoin");
  const [crypto2, setCrypto2] = useState("Ethereum");
  const [crypto1Data, setCrypto1Data] = useState();
  const [crypto2Data, setCrypto2Data] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [days, setDays] = useState(30);

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinsPrices(
      crypto1.toLowerCase(),
      event.target.value,
      priceType
    );
    const prices2 = await getCoinsPrices(
      crypto2.toLowerCase(),
      event.target.value,
      priceType
    );
    settingchartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinsPrices(crypto1.toLowerCase(), days, newType);
    const prices2 = await getCoinsPrices(crypto2.toLowerCase(), days, newType);
    settingchartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinsData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinsPrices(
        crypto1.toLowerCase(),
        days,
        priceType
      );
      const prices2 = await getCoinsPrices(
        crypto2.toLowerCase(),
        days,
        priceType
      );
      if (prices1.length > 0 && prices2.length > 0) {
        setIsLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinsData(event.target.value);
      coinObject(setCrypto1Data, data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const data1 = await getCoinsData(crypto1.toLowerCase());
    if (data1) {
      const data2 = await getCoinsData(crypto2.toLowerCase());
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinsPrices(
          crypto1.toLowerCase(),
          days,
          priceType
        );
        const prices2 = await getCoinsPrices(
          crypto2.toLowerCase(),
          days,
          priceType
        );
        settingchartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-20  md:pt-28 dark:bg-black ">
          <div className="flex sm:justify-between sm:items-center flex-col sm:flex-row gap-3 px-4 sm:px-8 md:px-12 mb-2">
            <SelectCoin
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="flex flex-col gap-4 sm:gap-0 px-2 mb-2">
            <div className="block w-full md:w-[95%] lg:w-[95%] bg-[#f3f3f3] dark:bg-darkgrey md:my-6  md:mx-5 lg:mx-auto rounded-xl pl-2">
              <List coin={crypto1Data} />
            </div>
            <div className="block w-full md:w-[95%] lg:w-[95%] bg-[#f3f3f3] dark:bg-darkgrey md:my-6  md:mx-5 lg:mx-auto rounded-xl pl-2">
              <List coin={crypto2Data} />
            </div>
          </div>
          <div className="block w-[95%] lg:w-[95%] bg-[#f3f3f3] dark:bg-darkgrey   md:mx-5 lg:mx-auto rounded-xl p-4 m-2">
            <PriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-0 px-2">
            <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
          </div>
        </div>
      )}
    </>
  );
};

export default ComparePage;
