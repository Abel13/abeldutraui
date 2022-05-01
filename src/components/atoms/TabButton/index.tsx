import React from "react";
import { IconType } from "react-icons/lib";

import { Container } from "./styles";

type Props = {
  active: boolean;
  children?: React.ReactNode;
  Icon: IconType;
};
const TabButton: React.FC<Props> = ({ Icon, active, children }) => {
  return (
    <Container active={active}>
      <div style={{ marginRight: 10 }}>
        <Icon />
      </div>
      {children}
    </Container>
  );
};

export default TabButton;
