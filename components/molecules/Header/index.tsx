import React from "react";
import buyMeACoffee from "../../../public/images/bmc-logo.svg";

import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitchLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Container, Content } from "./styles";
import Image from "next/image";
import { colors } from "../../../styles/colors";

interface Props {}
const Header: React.FC<Props> = ({}) => {
  const github = "https://github.com/Abel13";
  const youtube = "https://www.youtube.com/abeldutraui";
  const linkedin = "https://www.linkedin.com/in/abeldutra/";
  const instagram = "https://www.instagram.com/abel.o.dutra";
  const twitch = "https://www.twitch.tv/abeldutraui";
  const bmc = "https://www.buymeacoffee.com/abeldutraui";

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

          <a href={bmc} target="blank">
            <Image src={buyMeACoffee} height={24} width={24} alt="" />
          </a>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
