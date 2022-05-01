import React from "react";

import { Container, Image, ImageContainer } from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://avatars.githubusercontent.com/u/1572407?v=4"
          alt="Abel Dutra"
        />
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
            <b>77</b> projects on github
          </span>
          <span style={{ marginInline: 8 }}>
            <b>3</b> published apps
          </span>
          <span style={{ marginInline: 8 }}>
            <b>2</b> languages
          </span>
        </div>
        <div>
          <span>
            {`
            🌎 Brazil
            📍 Manhuaçu - MG 👣 Londrina - PR
            💼 Act Digital
            🎓 UTFPR - Software Engineering
            👶 1991
            💜 You Tube - Abel Dutra UI
            💉 Pfizer 3/3
            `}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
