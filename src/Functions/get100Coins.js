import axios from "axios";

export const get100Coins = () => {
  const myCoins = axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false', {
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-88xKRkW2gZjFnfx5XuAKFDCK",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return myCoins;
};
