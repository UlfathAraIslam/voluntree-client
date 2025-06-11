/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {},
};
export const darkMode = "class";
// eslint-disable-next-line no-undef
export const plugins = [require("daisyui")];
export const daisyui = {
    themes: [
    {
      mytheme: {
        primary: "#570DF8",
        secondary: "#F000B8",
        accent: "#37CDBE",
        neutral: "#3D4451",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
    "dark",
  ],
};
