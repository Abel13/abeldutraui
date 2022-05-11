import Image from "next/image";
import React from "react";
import { colors } from "../../../styles/colors";
import actDigital from "../../../public/images/act-digital.png";

import { Container } from "./styles";

const ExperienceCard: React.FC = () => {
  const description = `Client:
  Albert Einstein Israelite Hospital
  
  Position:
  Tech Lead
  
  Function:
  Lead a multidisciplinary and multilingual team, creating an
  mobile app based on React-Native, NodeJS and Drupal as CMS.`;

  return (
    <Container>
      <div
        style={{
          borderBottom: "solid",
          borderBottomColor: colors.grayHard,
          borderBottomWidth: 1,
          paddingBlockEnd: 10,
        }}
      >
        <h1>Act Digital</h1>
        <h2>Tech Lead</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBlock: 10,
        }}
      >
        <h2 style={{ marginInline: 5, color: colors.gray }}>
          <b>start date:</b> nov 30, 2021
        </h2>
        {/* <h2 style={{ marginInline: 5, color: colors.gray }}>
          <b>end date:</b> nov 30, 2021
        </h2> */}
      </div>
      <div style={{ marginBlock: 10 }}>
        <h2>Client:</h2>
        <span style={{ fontSize: 14 }}>Albert Einstein Israelite Hospital</span>
      </div>
      <span>
        <h2>Position:</h2>
        Tech Lead
      </span>
    </Container>
  );
};

export default ExperienceCard;
