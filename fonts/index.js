import localFont from "next/font/local";
export const grafierFont = localFont({
  src: [
    {
      path: "./Grafier-BlackDisplay.otf",
      weight: "900",
      style: "black",
    },
    {
      path: "./Grafier-BlackText.otf",
      weight: "900",
      style: "black",
    },
    {
      path: "./Grafier-RegularDisplay.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Grafier-RegularText.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Grafier-Variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
