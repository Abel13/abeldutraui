import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

import { Container } from "@/styles/components/atoms/TabButton";
import { theme } from "@/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  children?: React.ReactNode;
  Icon: IconType;
}
const TabButton: React.FC<Props> = ({ Icon, active, children, onClick }) => {
  return (
    <Container
      style={{
        color: `${active ? theme.colors.text : theme.colors.gray}`,
        borderTop: `1px solid ${
          active ? theme.colors.text : theme.colors.transparent
        }`,
      }}
      onClick={onClick}
    >
      <div style={{ marginRight: 10 }}>
        <Icon />
      </div>
      {children}
    </Container>
  );
};

export default TabButton;
