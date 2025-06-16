// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        agriox: {
          base: "#f1cf69",
          primary: "#334b35",
          secondary: "#6d8c54",
          accent: "#687469",
        },
      },
      fontFamily: {
        agriox: ["DM Sans", "sans-serif"],
        agriox2: ["Averia Sans Libre", "cursive"],
        agriox3: ["Shadows Into Light", "cursive"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up-slow": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-10px) translateX(10px)" },
          "50%": { transform: "translateY(0) translateX(0)" },
          "75%": { transform: "translateY(10px) translateX(-10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-up-slow": "fade-in-up-slow 1.2s ease-out forwards",
        "pulse-slow": "pulse-slow 4s infinite ease-in-out",
        "float-slow": "float-slow 6s infinite ease-in-out",
      },
    },
  },
};
