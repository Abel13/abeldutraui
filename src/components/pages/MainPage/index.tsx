import React from "react";
import {
  FaBriefcase,
  FaGithub,
  FaGraduationCap,
  FaLanguage,
  FaMailBulk,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { colors } from "../../../styles/colors";
import { ScrollView, TabButton } from "../../atoms";
import { Header } from "../../molecules";
import { Experiences, Profile } from "../../organisms";

import {
  Container,
  Content,
  ContentContainer,
  NavigationContainer,
} from "./styles";

const MainPage: React.FC = () => {
  return (
    <Container>
      <Header />
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
              <Profile />
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

export default MainPage;
