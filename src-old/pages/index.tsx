import TabButton from "@/components/atoms/TabButton";
import Contact from "@/components/templates/Contact";
import Education from "@/components/templates/Education";
import Experiences from "@/components/templates/Experiences";
import Languages from "@/components/templates/Languages";
import githubApi from "@/lib/axios";
import {
  Content,
  CustomImage,
  Header,
  HomeContainer,
  ImageContainer,
  Name,
  Numbers,
  Tab,
} from "@/styles/pages/home";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { MouseEvent, MouseEventHandler } from "react";
import { useCallback, useState } from "react";
import {
  FaBriefcase,
  FaGithub,
  FaGraduationCap,
  FaLanguage,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

interface ITabItem {
  Icon: any;
  active: boolean;
  label: string;
}

interface IHomeProps {
  avatarUrl: string;
  bio: string;
  followers: number;
  following: number;
  publicRepos: number;
}

export default function Home({
  avatarUrl,
  bio,
  followers,
  following,
  publicRepos,
}: IHomeProps) {
  const [selectedTab, setSelectedTab] = useState<string>("EXPERIENCES");
  const [tabs, setTabs] = useState<ITabItem[]>([
    {
      Icon: FaBriefcase,
      active: true,
      label: "EXPERIENCES",
    },
    {
      Icon: FaGraduationCap,
      active: false,
      label: "EDUCATION",
    },
    {
      Icon: FaLanguage,
      active: false,
      label: "LANGUAGES",
    },
    {
      Icon: FaGithub,
      active: false,
      label: "GITHUB",
    },
    {
      Icon: FaPhone,
      active: false,
      label: "CONTACT",
    },
  ]);

  const changeTab = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const {
        currentTarget: { textContent },
      } = event;

      if (textContent) {
        setTabs(
          tabs.map((tab) => {
            return {
              ...tab,
              active: textContent === tab.label,
            };
          })
        );

        setSelectedTab(textContent);
      }
    },
    [tabs]
  );

  const renderContent = useCallback(() => {
    switch (selectedTab) {
      case "EXPERIENCES":
        return <Experiences />;
      case "EDUCATION":
        return <Education />;
      case "LANGUAGES":
        return <Languages />;
      case "CONTACT":
        return <Contact />;
      default:
        return <div />;
    }
  }, [selectedTab]);

  return (
    <HomeContainer>
      <Head>
        <title>Abel Dutra UI</title>
      </Head>
      <Header>
        <ImageContainer>
          <CustomImage
            placeholder="blur"
            blurDataURL={avatarUrl}
            src={avatarUrl}
            alt=""
            width={150}
            height={150}
          />
        </ImageContainer>
        <div>
          <Name>Abel O. Dutra</Name>
          <Numbers>
            <div>
              <a
                href="https://github.com/Abel13?tab=repositories"
                target="blank"
              >
                <span>
                  <b>{publicRepos}</b> repositories
                </span>
              </a>
            </div>
            <div style={{ marginInline: 10 }}>
              <a href="https://github.com/Abel13?tab=followers" target="blank">
                <span>
                  <b>{followers}</b> followers
                </span>
              </a>
            </div>
            <div>
              <a href="https://github.com/Abel13?tab=following" target="blank">
                <span>
                  <b>{following}</b> following
                </span>
              </a>
            </div>
          </Numbers>
          <div>
            <span>{bio}</span>
          </div>
        </div>
      </Header>
      <Tab>
        {tabs.map(({ Icon, active, label }) => {
          return (
            <TabButton
              key={label}
              Icon={Icon}
              active={active}
              onClick={changeTab}
            >
              {label}
            </TabButton>
          );
        })}
      </Tab>
      <Content>{renderContent()}</Content>
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await githubApi.get("/users/Abel13");

  return {
    props: {
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      followers: response.data.followers,
      following: response.data.following,
      publicRepos: response.data.public_repos,
    },
  };
};
