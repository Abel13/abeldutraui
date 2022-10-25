import React from "react";

import { Container, CustomImage, ImageContainer, Name } from "./styles";

import "react-loading-skeleton/dist/skeleton.css";
import { Skeleton } from "../../atoms";

interface Props {
  imageUrl: string;
  gitProjects: number;
  gitFollowers: number;
  gitFollowing: number;
  bio: string;
  loading: boolean;
}
const Profile: React.FC<Props> = ({
  imageUrl,
  gitProjects,
  gitFollowers,
  gitFollowing,
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
          <div style={{}}>
            {loading ? (
              <Skeleton width={80} inline />
            ) : (
              <a
                href="https://github.com/Abel13?tab=repositories"
                target="blank"
              >
                <span>
                  <b>{gitProjects}</b> repositories
                </span>
              </a>
            )}
          </div>
          <div style={{ marginInline: 10 }}>
            {loading ? (
              <Skeleton width={80} inline />
            ) : (
              <a href="https://github.com/Abel13?tab=followers" target="blank">
                <span>
                  <b>{gitFollowers}</b> followers
                </span>
              </a>
            )}
          </div>
          <div style={{}}>
            {loading ? (
              <Skeleton width={80} inline />
            ) : (
              <a href="https://github.com/Abel13?tab=following" target="blank">
                <span>
                  <b>{gitFollowing}</b> following
                </span>
              </a>
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
