/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "animated-gradient":
          "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(31, 83, 198, 1) 0%, rgba(0, 212, 255, 1) 100%)",
      },
      backgroundSize: {
        400: "400% 400%",
      },
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      colors: {
        white: "#fff",
        black: "#111",
        blue: "#3a80e9",
        grey: "#888",
        darkgrey: "#1b1b1b",
        green: "#61c96f",
        red: "#f91441",
      },
    },
  },
  plugins: [],
};
