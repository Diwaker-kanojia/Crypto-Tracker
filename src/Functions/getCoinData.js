import axios from "axios";

export const getCoinsData = (id) => {
  const API = import.meta.env.VITE_SINGLE_COIN_API;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const options = {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": API_KEY,
    },
  };

  const myData = axios
    .get(`${API}${id}`, options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {});
  return myData;
};
