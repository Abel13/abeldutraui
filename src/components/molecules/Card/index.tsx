import {
  Container,
  CardFooter,
  CardHeader,
  Description,
  Subtitle,
  Title,
} from "@/styles/components/molecules/Card";
import React from "react";

interface ICardProps {
  href?: string;
  title: string;
  subtitle: string;
  description?: string;
}

const Card: React.FC<ICardProps> = ({ title, subtitle, description }) => {
  return (
    <Container>
      <CardHeader />
      <CardFooter>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </CardFooter>
    </Container>
  );
};

export default Card;
