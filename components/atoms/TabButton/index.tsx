import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

import { Container } from "./styles";
import { useRouter } from "next/router";

type Props = {
  href: string;
  active: boolean;
  children?: React.ReactNode;
  Icon: IconType;
};
const TabButton: React.FC<Props> = ({ Icon, href, active, children }) => {
  const router = useRouter();

  return (
    <Container
      active={active}
      onClick={() => router.push(href, undefined, { shallow: true })}
    >
      <div style={{ marginRight: 10 }}>
        <Icon />
      </div>
      {children}
    </Container>
  );
};

export default TabButton;
