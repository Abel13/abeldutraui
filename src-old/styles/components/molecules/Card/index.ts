import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "15rem",
  height: "15rem",
  backgroundColor: "$card",
  borderRadius: "4px",
  padding: "10px",
  transition: "filter 0.3s ease",

  cursor: "pointer",

  "&:hover": {
    filter: "brightness(1.1)",
  },
});

export const CardHeader = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

export const CardFooter = styled("div", {
  display: "flex",
  flex: 0.4,
  flexDirection: "column",
  padding: "10px",

  borderRadius: 4,

  backgroundColor: "$border",
});

export const Title = styled("h1", {});

export const Subtitle = styled("h2", {});

export const Description = styled("h3", {
  opacity: 0.6,
});
