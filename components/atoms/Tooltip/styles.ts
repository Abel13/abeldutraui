import styled from "styled-components";

import { colors } from "../../../styles/colors";

export const Body = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${colors.primary};
    padding: 8px;
    border-radius: 4px;
    color: ${colors.light};
    font-size: 16px;
    font-weight: 600;
    font-family: "Advent Pro", sans-serif;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;

    &::before {
      content: "";
      border-style: solid;
      border-color: ${colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
