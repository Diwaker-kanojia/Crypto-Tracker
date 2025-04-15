import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Grid from "../Grid/Grid";
import List from "../List/List";
import Button from "../../Common/Button/Button";
export default function Tabs({ coins, setSearch }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styling = {
    width: "50vw",
    fontSize: "1rem",
    fontWeight: 600,
    fontFamily: "Inter",
    TextTransform: "capitalize",
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab
            label="Grid"
            value="grid"
            sx={styling}
            className="dark:text-white"
          />
          <Tab
            label="List"
            value="list"
            sx={styling}
            className="dark:text-white "
          />
        </TabList>
        <TabPanel value="grid">
          {coins.length == 0 ? (
            <div className="h-[50vh] w-full flex flex-col justify-center items-center">
              <h1 className="text-xl md:text-2xl text-grey dark:text-white mb-5 font-bold">
                No Items Found
              </h1>
              <Button
                text={"Clear Search"}
                onClick={(e) => {
                  setSearch("");
                }}
              />
            </div>
          ) : (
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-1 px-1">
              {coins.map((coin, index) => (
                <Grid coin={coin} key={index} delay={((index + 5) % 5) * 0.1} />
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel value="list" className="max-sm:p-2">
          {coins.length == 0 ? (
            <div className="h-[50vh] w-full flex flex-col justify-center items-center">
              <h1 className="text-xl md:text-2xl text-grey dark:text-white mb-5 font-bold">
                No Items Found
              </h1>
              <Button
                text={"Clear Search"}
                onClick={(e) => {
                  setSearch("");
                }}
              />
            </div>
          ) : (
            <table className="w-full md:w-[95%] block md:ml-auto md:mr-auto">
              {coins.map((coin, index) => (
                <List coin={coin} key={index} delay={(index % 10) * 0.1} />
              ))}
            </table>
          )}
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
