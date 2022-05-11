import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin: 30px 50px;
  border: 1px solid ${colors.light};
  width: 160px;
  height: 160px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 0 0.7px ${colors.light}, 0 0 1px ${colors.light},
    0 0 2px ${colors.light}, 0 0 4px ${colors.secondary},
    0 0 8px ${colors.secondary}, 0 0 9px ${colors.secondary},
    0 0 10px ${colors.secondary}, 0 0 15px ${colors.secondary}; */
`;

export const CustomImage = styled(Image).attrs({
  width: 150,
  height: 150,
})`
  border-radius: 50%;
`;

export const Name = styled.span`
  font-size: 24px;
`;
