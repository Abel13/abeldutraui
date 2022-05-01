import React from "react";

import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Container, Content } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <h3>ABEL DUTRA UI</h3>
        <div>
          <RiGithubLine style={{ marginInline: 8 }} size={24} />
          <RiYoutubeLine style={{ marginInline: 8 }} size={24} />
          <RiLinkedinLine style={{ marginInline: 8 }} size={24} />
          <RiInstagramLine style={{ marginInline: 8 }} size={24} />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
