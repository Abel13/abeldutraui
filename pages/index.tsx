import React, { useEffect } from "react";
import {
  FaBriefcase,
  FaGithub,
  FaGraduationCap,
  FaLanguage,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { ScrollView, TabButton } from "../components/atoms";
import { Header } from "../components/molecules";
import { Experiences, Profile } from "../components/organisms";
import { IGitUser } from "../domain/GItUser";
import { apiGit } from "../services/api";

import {
  Container,
  Content,
  ContentContainer,
  NavigationContainer,
} from "../styles/HomePage";

interface Props {
  gitUser: IGitUser;
  github: string;
  youtube: string;
  linkedin: string;
  instagram: string;
  twitch: string;
}
const HomePage: React.FC<Props> = ({
  gitUser,
  github,
  instagram,
  linkedin,
  twitch,
  youtube,
}) => {
  return (
    <Container>
      <Header
        github={github}
        linkedin={linkedin}
        instagram={instagram}
        twitch={twitch}
        youtube={youtube}
      />
      <ScrollView>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ContentContainer>
            <Content>
              <Profile
                imageUrl={gitUser.avatar_url}
                gitFollowers={gitUser.followers}
                gitProjects={gitUser.public_repos}
                bio={gitUser.bio}
              />
              <NavigationContainer>
                <TabButton Icon={FaBriefcase} active>
                  EXPERIENCES
                </TabButton>
                <TabButton Icon={FaGraduationCap} active={false}>
                  EDUCATION
                </TabButton>
                <TabButton Icon={FaLanguage} active={false}>
                  LANGUAGES
                </TabButton>
                <TabButton Icon={FaGithub} active={false}>
                  GITHUB
                </TabButton>
                <TabButton Icon={FaYoutube} active={false}>
                  YOUTUBE
                </TabButton>
                <TabButton Icon={FaPhone} active={false}>
                  CONTACT
                </TabButton>
              </NavigationContainer>
              <Experiences />
            </Content>
          </ContentContainer>
        </div>
      </ScrollView>
    </Container>
  );
};

export const getStaticProps = async () => {
  const response = await apiGit.get("/users/abel13");

  const gitUser = response.data;

  return {
    props: {
      gitUser,
      github: "https://github.com/Abel13",
      youtube: "https://www.youtube.com/abeldutraui",
      linkedin: "https://www.linkedin.com/in/abeldutra/",
      instagram: "https://www.instagram.com/abeldutraui",
      twitch: "https://www.twitch.tv/abeldutraui",
    },
  };
};

export default HomePage;
