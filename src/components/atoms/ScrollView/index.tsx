import React from "react";
import { ScrollViewContainer } from "./styles";

type Props = {
  children?: React.ReactNode;
};
const ScrollView: React.FC<Props> = ({ children }) => (
  <ScrollViewContainer>{children}</ScrollViewContainer>
);

export default ScrollView;
