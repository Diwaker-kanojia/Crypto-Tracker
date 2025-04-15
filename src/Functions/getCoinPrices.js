import axios from "axios";

export const getCoinsPrices = (id, days, priceType) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-88xKRkW2gZjFnfx5XuAKFDCK",
    },
  };
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      options
    )
    .then((res) => {
      return res.data[priceType];
    })
    .catch((error) => {
      console.log(error);
    });
  return prices;
};
