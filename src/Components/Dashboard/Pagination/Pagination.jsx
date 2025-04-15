import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export default function PaginationComponent({
  page,
  handlePageChange,
  topToPage,
}) {
  return (
    <>
      <div className="flex justify-center items-center mb-10 dark:hidden">
        <Pagination
          count={10}
          page={page}
          onChange={(event, value) => {
            handlePageChange(event, value);
            topToPage();
          }}
          sx={{
            color: "#fff",
            "& .Mui-selected": {
              backgroundColor: "#3a80e9 !important",
              color: "#fff !important",
              borderColor: "#3a80e9 !important",
            },
            "& .MuiPaginationItem-ellipsis": {
              border: "0px solid #1b1b1b !important",
            },
            " & .MuiPaginationItem-text": {
              color: "#1b1b1b",
              border: "1px solid #1b1b1b",
            },
          }}
        />
      </div>
      <div className=" justify-center items-center pb-10 hidden dark:flex">
        <Pagination
          count={10}
          page={page}
          onChange={(event, value) => {
            handlePageChange(event, value);
            topToPage();
          }}
          sx={{
            color: "#fff",
            "& .Mui-selected": {
              backgroundColor: "#3a80e9 !important",
              color: "#fff !important",
              borderColor: "#3a80e9 !important",
            },
            "& .MuiPaginationItem-ellipsis": {
              border: "0px solid #1b1b1b !important",
            },
            " & .MuiPaginationItem-text": {
              color: "#fff",
              border: "1px solid #fff",
            },
          }}
        />
      </div>
    </>
  );
}
