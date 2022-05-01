import styled from "styled-components";

import { shade } from "polished";
import { colors } from "../../../styles/colors";

export const ScrollViewContainer = styled.div`
  flex: 1;
  display: flex;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${colors.transparent};
  }

  &::-webkit-scrollbar-track:hover {
    background: ${colors.whiteTransparent};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${colors.light};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.2, colors.light)};
  }
`;
