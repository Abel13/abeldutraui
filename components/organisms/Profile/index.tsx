import React from "react";

import { Container, CustomImage, ImageContainer } from "./styles";

interface Props {
  imageUrl: string;
  gitProjects: number;
  gitFollowers: number;
  bio: string;
}
const Profile: React.FC<Props> = ({
  imageUrl,
  gitProjects,
  gitFollowers,
  bio,
}) => {
  return (
    <Container>
      <ImageContainer>
        <CustomImage src={imageUrl} alt="Abel Dutra" />
      </ImageContainer>
      <div
        style={{ display: "flex", flexDirection: "column", marginBlock: 50 }}
      >
        <span style={{ fontSize: 24 }}>Abel de Oliveira Dutra</span>
        <div style={{ flexDirection: "row", marginBlock: 20 }}>
          <span style={{ marginInline: 8 }}>
            <b>10</b> years of experience
          </span>
          <span style={{ marginInline: 8 }}>
            <b>{gitProjects}</b> projects
          </span>
          <span style={{ marginInline: 8 }}>
            <b>{gitFollowers}</b> followers
          </span>
        </div>
        <div>
          <span>{bio}</span>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
