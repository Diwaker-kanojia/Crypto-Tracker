import React, { useEffect, useState } from "react";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import axios from "axios";
import Search from "../Components/Dashboard/Search/Search";
import PaginationComponent from "../Components/Dashboard/Pagination/Pagination";
import Loader from "../Components/Common/Laoder/Loader";
import BackToTop from "../Components/Common/BackToTop/BackToTop";
import { get100Coins } from "../Functions/get100Coins.js";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 20;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 20));
  };
  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    fetchCoinData();
  }, []);
  const fetchCoinData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };
  useEffect(() => {
    topToPage();
  }, []);

  const topToPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="pt-20 dark:bg-black">
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
          <Tabs
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
              topToPage={topToPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
