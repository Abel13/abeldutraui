import styled, { keyframes } from "styled-components";

import { colors } from "../../../styles/colors";

const breatheAnimation = keyframes`
 100% {      box-shadow:
      0 0 0.4px ${colors.light},
      0 0 1.1px ${colors.light},
      0 0 1.9px ${colors.light},
      0 0 4px ${colors.secondary},
      0 0 8px ${colors.secondary},
      0 0 9px ${colors.secondary},
      0 0 10px ${colors.secondary},
      0 0 15px ${colors.secondary};
  }
  
  0% {
    box-shadow:
    0 0 0.2px ${colors.light},
    0 0 0.4px ${colors.light},
    0 0 0.6px ${colors.light},
    0 0 1px ${colors.secondary},
    0 0 4.5px ${colors.secondary},
    0 0 5.5px ${colors.secondary},
    0 0 7px ${colors.secondary},
    0 0 8px ${colors.secondary};
  }
`;

export const Container = styled.header`
  background-color: ${colors.inputs};
  border: 1px solid ${colors.light};
  display: flex;
  animation: ${breatheAnimation} 2.5s ease-in-out infinite alternate;

  width: 340px;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  max-width: 1000px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
