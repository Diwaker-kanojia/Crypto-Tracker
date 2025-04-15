import React from "react";
import Button from "../../Common/Button/Button";
import iPhone from "../../../assets/Phone/iphone.png";
import gradient from "../../../assets/Phone/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
import { RWebShare } from "react-web-share";
const MainComponent = () => {
  return (
    <div className="pt-24 px-4 sm:px-6 md:px-8 flex flex-col justify-start lg:justify-between lg:flex-row dark:bg-black h-[150vh] sm:h-[200vh] lg:h-[120vh] ">
      <div className="pt-3 md:pt-20 flex flex-col items-center lg:items-start mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl sm:text-7xl md:text-8xl max-w-[200px] sm:max-w-full md:max-w-[300px] lg:max-w-full font-extrabold mb-4 
          hover:font-outline-1
          hover:text-white
           dark:text-white dark:hover:text-black dark:hover:font-outline-2 transition-all duration-500"
        >
          Track Crytpo
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-blue items-center lg:items-start mb-4"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-xl text-grey text-center md:text-start mb-4"
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex gap-4 md:gap-8 pt-4"
        >
          <Link to="/dashboard">
            <Button text={"Dashboard"} />
          </Link>
          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-tracker-ashen-alpha.vercel.app/",
              title: "CryptoDashboard.",
            }}
          >
            <Button text={"Share"} outline={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="w-full lg:w-[50%] pt-3 relative dark:bg-black ">
        <motion.img
          initial={{ y: -30 }}
          animate={{ y: 30 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={iPhone}
          alt="iphone"
          className="absolute z-20 w-[250px] right-6 sm:right-40 sm:w-[350px] lg:right-0 xl:right-10"
        />
        <img
          src={gradient}
          alt="gradient"
          className="absolute w-[200px] sm:w-[300px] top-[6rem] right-6 sm:right-40 lg:right-0 xl:right-10"
        />
      </div>
    </div>
  );
};

export default MainComponent;
