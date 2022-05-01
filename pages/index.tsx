import React, { ReactElement } from "react";
import { FaBriefcase, FaGraduationCap, FaLanguage } from "react-icons/fa";
import { ScrollView, TabButton } from "../components/atoms";
import { Header } from "../components/molecules";
import { Layout, Profile } from "../components/organisms";
import { IGitUser } from "../domain/GItUser";
import { apiGit } from "../services/api";
import Lottie from "react-lottie";
import animationData from "../public/lotties/comming-soon.json";

const Page = ({}) => {
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

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
