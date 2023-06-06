import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "#3876BF",
      secondary: "#39ace7",

      white: "#ffffff",
      black: "#000000",
      gray: "#999591",
      grayHard: "#666360",

      success: "#269E26",
      danger: "#FF8282",
      warning: "#C59A2F",
      info: "#235C7E",

      revenues: "#00B0F0",
      fixedExpenses: "#E26B0A",
      variableExpenses: "#FF0000",
      investments: "#76933C",

      whiteTransparent: "#e4edf855",
      blackTransparent: "#00000055",
      transparent: "transparent",

      inputs: "#232129",
      background: "#312E38",

      card: "#28262e",
      text: "#e4edf8",
      border: "#38363e",
      notification: "#F2a",
    },
  },
});
