import React from "react";

import { Container, CustomImage, ImageContainer, Name } from "./styles";

import "react-loading-skeleton/dist/skeleton.css";
import { Skeleton } from "../../atoms";

interface Props {
  imageUrl: string;
  gitProjects: number;
  gitFollowers: number;
  bio: string;
  loading: boolean;
}
const Profile: React.FC<Props> = ({
  imageUrl,
  gitProjects,
  gitFollowers,
  bio,
  loading,
}) => {
  return (
    <Container>
      <ImageContainer>
        {imageUrl && !loading ? (
          <CustomImage src={imageUrl} alt="Abel Dutra" />
        ) : (
          <Skeleton
            height={150}
            width={150}
            containerClassName="avatar-skeleton"
            circle
          />
        )}
      </ImageContainer>
      <div
        style={{ display: "flex", flexDirection: "column", marginBlock: 50 }}
      >
        <Name>
          {loading ? <Skeleton width={256} /> : "Abel de Oliveira Dutra"}
        </Name>
        <div style={{ display: "flex", flexDirection: "row", marginBlock: 20 }}>
          <div style={{ marginInlineEnd: 8 }}>
            {loading ? (
              <Skeleton width={80} inline />
            ) : (
              <span>
                <b>10</b> years of experience
              </span>
            )}
          </div>
          <div style={{}}>
            {loading ? (
              <Skeleton width={80} inline />
            ) : (
              <span>
                <b>{gitProjects}</b> projects
              </span>
            )}
          </div>
          <div style={{ marginInlineStart: 8 }}>
            {loading ? (
              <Skeleton width={80} inline />
            ) : (
              <span>
                <b>{gitFollowers}</b> followers
              </span>
            )}
          </div>
        </div>
        <div>
          <span>{bio || <Skeleton count={5} />}</span>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
