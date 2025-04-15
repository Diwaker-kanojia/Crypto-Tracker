import React from "react";

const Button = ({ text, outline }) => {
  return (
    <div
      className={
        outline
          ? "bg-transparent text-black border-2 border-blue py-2 px-6 rounded-3xl text-center font-semibold cursor-pointer min-w-[130px] hover:bg-blue transition-all duration-200 capitalize dark:text-white"
          : `bg-blue text-white py-2 px-6 border-2 border-blue rounded-3xl font-semibold text-center cursor-pointer shadow-lg hover:shadow-drop transition-all duration-200 min-w-[100px] capitalize`
      }
    >
      {text}
    </div>
  );
};

export default Button;
