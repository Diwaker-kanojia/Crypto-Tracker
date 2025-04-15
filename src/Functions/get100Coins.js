import axios from "axios";

export const get100Coins = () => {
  const API = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const myCoins = axios
    .get(API, {
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY,
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
