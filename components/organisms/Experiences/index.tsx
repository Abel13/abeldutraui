import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/lotties/comming-soon.json";

// import { Container } from './styles';

const Experiences: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ margin: 100 }}>
      <Lottie options={defaultOptions} width={"50%"} />
    </div>
  );
};

export default Experiences;
