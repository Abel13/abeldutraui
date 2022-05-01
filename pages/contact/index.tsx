import React, { ReactElement } from "react";
import { Layout } from "../../components/organisms";
import Lottie from "react-lottie";
import animationData from "../../public/lotties/comming-soon.json";

// import { Container } from './styles';

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div style={{ margin: 100 }}>
        <Lottie options={defaultOptions} width={"50%"} />
      </div>
    </div>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Contact;
