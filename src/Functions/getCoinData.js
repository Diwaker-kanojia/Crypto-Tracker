import axios from "axios";

export const getCoinsData = (id) => {
  const options = {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-88xKRkW2gZjFnfx5XuAKFDCK",
    },
  };

  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`, options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {});
  return myData;
};
