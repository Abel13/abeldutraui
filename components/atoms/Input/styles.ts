import styled, { css } from "styled-components";

import { colors } from "../../../styles/colors";
import Tooltip from "../Tooltip";
import { ContainerProps } from "./interfaces";

export const Container = styled.div<ContainerProps>`
  background: ${colors.inputs};
  border-radius: 10px;
  border: 2px solid ${colors.inputs};
  padding: 16px;
  width: 100%;
  color: ${colors.grayHard};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.gotError &&
    css`
      transition: border-bottom-color 0.8s;

      border-bottom-color: ${colors.danger};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      transition: border-bottom-color 0.8s;

      border-bottom-color: ${colors.primary};
      color: ${colors.primary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${colors.primary};
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;

    ${(props) =>
      props.disabled
        ? css`
            color: ${colors.grayHard};
          `
        : css`
            color: ${colors.light};
          `}

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: ${colors.grayHard};
    }

    &::-webkit-calendar-picker-indicator {
      opacity: 0.6;
      filter: invert(0.4);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Currency = styled.div`
  margin-right: 10px;
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.danger};

    &::before {
      border-color: ${colors.danger} transparent;
    }
  }
`;
