import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaGithub,
  FaGraduationCap,
  FaLanguage,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { IGitUser } from "../../../domain/GItUser";
import { apiGit } from "../../../services/api";
import { ScrollView, TabButton } from "../../atoms";
import { Header } from "../../molecules";
import Profile from "../Profile";
import {
  Container,
  Content,
  ContentContainer,
  NavigationContainer,
} from "./styles";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const route = useRouter();
  const [loading, setLoading] = useState(true);
  const [gitUser, setGitUser] = React.useState<IGitUser>({} as IGitUser);
  const [tabs, setTabs] = useState([
    {
      href: "/",
      Icon: FaBriefcase,
      active: true,
      label: "EXPERIENCES",
    },
    {
      href: "/education",
      Icon: FaGraduationCap,
      active: false,
      label: "EDUCATION",
    },
    {
      href: "/languages",
      Icon: FaLanguage,
      active: false,
      label: "LANGUAGES",
    },
    {
      href: "/github",
      Icon: FaGithub,
      active: false,
      label: "GITHUB",
    },
    {
      href: "/youtube",
      Icon: FaYoutube,
      active: false,
      label: "YOUTUBE",
    },
    {
      href: "/contact",
      Icon: FaPhone,
      active: false,
      label: "CONTACT",
    },
  ]);

  const fetchGitUser = async () => {
    setLoading(true);
    const response = await apiGit.get("/users/abel13");
    setGitUser(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGitUser();
  }, []);

  useEffect(() => {
    setTabs(
      tabs.map((tab) => {
        return {
          ...tab,
          active: route.asPath === tab.href,
        };
      })
    );
  }, [route.asPath]);

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
              {
                <Profile
                  loading={loading}
                  imageUrl={gitUser.avatar_url}
                  gitFollowers={gitUser.followers}
                  gitFollowing={gitUser.following}
                  gitProjects={gitUser.public_repos}
                  bio={gitUser.bio}
                />
              }
              <NavigationContainer>
                {tabs.map(({ href, Icon, active, label }) => {
                  return (
                    <TabButton
                      key={href}
                      href={href}
                      Icon={Icon}
                      active={active}
                    >
                      {label}
                    </TabButton>
                  );
                })}
              </NavigationContainer>
              {children}
            </Content>
          </ContentContainer>
        </div>
      </ScrollView>
    </Container>
  );
};

export default Layout;
