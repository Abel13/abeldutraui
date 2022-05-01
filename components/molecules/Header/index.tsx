import React from "react";

import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitchLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Container, Content } from "./styles";

interface Props {
  github: string;
  youtube: string;
  linkedin: string;
  instagram: string;
  twitch: string;
}
const Header: React.FC<Props> = ({
  github,
  instagram,
  linkedin,
  twitch,
  youtube,
}) => {
  return (
    <Container>
      <Content>
        <h3>ABEL DUTRA UI</h3>
        <div>
          <a href={github} target="blank">
            <RiGithubLine style={{ marginInline: 8 }} size={24} />
          </a>
          <a href={youtube} target="blank">
            <RiYoutubeLine style={{ marginInline: 8 }} size={24} />
          </a>

          <a href={linkedin} target="blank">
            <RiLinkedinLine style={{ marginInline: 8 }} size={24} />
          </a>

          <a href={instagram} target="blank">
            <RiInstagramLine style={{ marginInline: 8 }} size={24} />
          </a>

          <a href={twitch} target="blank">
            <RiTwitchLine style={{ marginInline: 8 }} size={24} />
          </a>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
