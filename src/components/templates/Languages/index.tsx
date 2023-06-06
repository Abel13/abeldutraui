import Card from "@/components/molecules/Card";
import { Container } from "@/styles/components/templates/Languages";

import React from "react";

const Languages: React.FC = () => {
  return (
    <Container>
      <Card title="English" subtitle="Uper Intermediate" />
      <Card title="Portuguese" subtitle="Native" />
    </Container>
  );
};

export default Languages;
