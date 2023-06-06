import { globalStyles } from "@/styles/global";
import {
  Container,
  ContentContainer,
  Title,
  TitleContainer,
} from "@/styles/pages/app";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitchLine,
  RiYoutubeLine,
} from "react-icons/ri";
import type { AppProps } from "next/app";
import Image from "next/image";
import buyMeACoffee from "@/assets/bmc-logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <h1>ABEL DUTRA UI</h1>
          <div>
            <a href={"github"} target="blank">
              <RiGithubLine style={{ marginInline: 8 }} size={24} />
            </a>
            <a href={"youtube"} target="blank">
              <RiYoutubeLine style={{ marginInline: 8 }} size={24} />
            </a>

            <a href={"linkedin"} target="blank">
              <RiLinkedinLine style={{ marginInline: 8 }} size={24} />
            </a>

            <a href={"instagram"} target="blank">
              <RiInstagramLine style={{ marginInline: 8 }} size={24} />
            </a>

            <a href={"twitch"} target="blank">
              <RiTwitchLine style={{ marginInline: 8 }} size={24} />
            </a>

            <a href={"bmc"} target="blank">
              <Image src={buyMeACoffee} height={22} width={30} alt="" />
            </a>
          </div>
        </Title>
      </TitleContainer>

      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
    </Container>
  );
}
