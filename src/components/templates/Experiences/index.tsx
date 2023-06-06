import Card from "@/components/molecules/Card";
import { Container } from "@/styles/components/templates/Experiences";

import React from "react";

const Experiences: React.FC = () => {
  return (
    <Container>
      <Card
        title="Act Digital"
        subtitle="Tech Lead"
        description="2021 - Present"
      />
      <Card
        title="Accurate Software"
        subtitle="Mobile Developer - Flutter"
        description="2021 - 2021"
      />
      <Card
        title="Lexis Nexis via Luby Software"
        subtitle="Mobile Developer - React Native"
        description="2020 - 2020"
      />
      <Card
        title="Luby Software"
        subtitle="Full Stack Developer - Javascript"
        description="2019 - 2020"
      />
      <Card
        title="MEI Fácil"
        subtitle="Mobile Developer - React Native"
        description="2017 - 2019"
      />
      <Card
        title="Focus Consultoria"
        subtitle="Thecnology coordinator"
        description="2015 - 2017"
      />
      <Card
        title="SS Soluções"
        subtitle="Frontend Developer - Visual Basic"
        description="2013 - 2014"
      />
      <Card
        title="Autocom"
        subtitle="Frontend Developer - C#"
        description="2012 - 2013"
      />
      <Card
        title="Atlanta Sistemas"
        subtitle="Frontend Developer - Visual Basic"
        description="2011 - 2012"
      />
    </Container>
  );
};

export default Experiences;
