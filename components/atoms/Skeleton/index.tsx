import React from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import { colors } from "../../../styles/colors";

interface Props extends SkeletonProps {}
const CustomSkeleton: React.FC<Props> = ({ ...rest }) => {
  return (
    <Skeleton
      baseColor={colors.inputs}
      highlightColor={colors.blackTransparent}
      {...rest}
    />
  );
};

export default CustomSkeleton;
