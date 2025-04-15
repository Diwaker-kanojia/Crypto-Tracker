import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedIn from "@mui/icons-material/LinkedIn";
import WhatsApp from "@mui/icons-material/WhatsApp";
import X from "@mui/icons-material/X";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    to: "mailto:diwakerkanojia17@gmail.com",
    Icon: EmailIcon,
    size: "medium",
  },
  {
    to: "mailto:diwakerkanojia17@gmail.com",
    Icon: LinkedIn,
    size: "medium",
  },
  {
    to: "//api.whatsapp.com/send?phone=+919555713785&text=Hello , Diwaker. I'd like to chat with you 😊",
    Icon: WhatsApp,
    size: "medium",
  },
  {
    to: "https://x.com/Diwaker_Kanojia?t=8rtlTYC6LoFIcMBn7_FI1w&s=09",
    Icon: X,
    size: "small",
  },
];
const Footer = () => {
  return (
    <div className="dark:bg-black py-8 md:py-6">
      <div className="bg-animated-gradient bg-400 animate-gradient flex justify-between p-4 mx-4 rounded-lg">
        <h2 className="text-md md:text-xl font-bold text-black dark:text-white ">
          CryptoTracker.
        </h2>
        <div className="flex gap-2 md:gap-4 ">
          {footerLinks.map((item, index) => (
            <Link target="_blank" to={item.to} key={index}>
              <item.Icon
                fontSize={item.size}
                className="text-black text-sm dark:text-white"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
