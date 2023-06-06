import Card from "@/components/molecules/Card";
import Experience from "@/components/molecules/Card";
import { Container } from "@/styles/components/templates/Education";

import React from "react";

const Education: React.FC = () => {
  return (
    <Container>
      <Card
        title="Federal University of Technology - Paraná"
        subtitle="Software Engineering"
        description="2017 - 2022"
      />
      <Card
        title="Rocketseat"
        subtitle="Full Stack Developer Specialization"
        description="2019 - 2020"
      />
      <Card
        title="Fluminense Federal University"
        subtitle="Computer Science"
        description="2014 - 2017 (Incomplete)"
      />
      <Card title="Uptime" subtitle="English" description="2012 - 2013" />
      <Card
        title="CEM"
        subtitle="Computer Technician"
        description="2010 - 2011"
      />
    </Container>
  );
};

export default Education;
