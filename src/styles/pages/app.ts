import { styled } from "..";
import { keyframes } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  height: "100vh",
  overflow: "hidden",
  flexDirection: "column",
});

export const Title = styled("div", {
  display: "flex",
  flex: 1,
  maxWidth: 1000,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const breatheAnimation = keyframes({
  "0%": {
    boxShadow: `0 0 0.2px #e4edf8,
  0 0 0.4px #e4edf8,
  0 0 0.6px #e4edf8,
  0 0 1px #39ace7,
  0 0 4.5px #39ace7,
  0 0 5.5px #39ace7,
  0 0 7px #39ace7,
  0 0 8px #39ace7`,
  },
  "50%": {
    boxShadow: `0 0 0.4px #e4edf8,
  0 0 1.1px #e4edf8,
  0 0 1.9px #e4edf8,
  0 0 4px #39ace7,
  0 0 8px #39ace7,
  0 0 9px #39ace7,
  0 0 10px #39ace7,
  0 0 15px #39ace7`,
  },
  "100%": {
    boxShadow: `0 0 0.2px #e4edf8,
  0 0 0.4px #e4edf8,
  0 0 0.6px #e4edf8,
  0 0 1px #39ace7,
  0 0 4.5px #39ace7,
  0 0 5.5px #39ace7,
  0 0 7px #39ace7,
  0 0 8px #39ace7`,
  },
});

export const TitleContainer = styled("div", {
  display: "flex",
  borderBottom: "1px solid $text",
  minHeight: "7vh",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$inputs",
  animation: `${breatheAnimation} 2s linear infinite`,
  zIndex: 1,
});

export const ContentContainer = styled("div", {
  display: "flex",
  flex: 1,
  height: "100%",
  width: "100%",
  overflow: "scroll",
  justifyContent: "center",
});
