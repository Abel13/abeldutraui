import React from "react";
import { colors } from "../../../styles/colors";

interface Props {
  videoUrl: string;
  title: string;
}
const YouTubeCard: React.FC<Props> = ({ videoUrl, title }) => {
  return (
    <div
      style={{
        display: "flex",
        width: 340,
        flexDirection: "column",
        backgroundColor: colors.inputs,
        margin: 10,
        padding: 5,
        borderRadius: 5,
      }}
    >
      <iframe
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: 4 }}
      ></iframe>
      <span
        style={{
          fontSize: 14,
          margin: 10,
          display: "block",
          wordWrap: "break-word",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default YouTubeCard;
