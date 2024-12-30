import Image from "next/image";
import { styled } from "..";

export const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "1100px",
});

export const Header = styled("header", {
  display: "flex",
  flexDirection: "row",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  display: "flex",
  margin: "30px 50px",
  border: "1px solid $text",
  width: 160,
  height: 160,
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
});

export const CustomImage = styled(Image, {
  borderRadius: "50%",
});

export const Name = styled("span", {
  fontSize: 24,
});

export const Tab = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "40px",
  borderTop: "1px solid $whiteTransparent",
});

export const Content = styled("div", {
  display: "flex",
  width: 990,
  alignSelf: "center",
});

export const Numbers = styled("div", {
  display: "flex",
  flexDirection: "row",
  marginBlock: 20,
});
