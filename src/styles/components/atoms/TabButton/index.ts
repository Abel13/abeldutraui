import { styled } from "@stitches/react";

export interface IContainerProps {
  active: boolean;
}

export const Container = styled("button", {
  display: "flex",
  border: "none",
  fontSize: "12px",
  paddingBlock: "15px",
  paddingInline: "20px",
  marginTop: "-1px",
  backgroundColor: "$transparent",
  color: "$gray",
});
