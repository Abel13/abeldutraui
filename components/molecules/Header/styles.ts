import styled from "styled-components";

import { colors } from "../../../styles/colors";

export const Container = styled.header`
  background-color: ${colors.dark};
  border-bottom: 1px solid ${colors.light};
  min-height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 0 0.7px ${colors.light}, 0 0 1px ${colors.light},
    0 0 2px ${colors.light}, 0 0 4px ${colors.secondary},
    0 0 8px ${colors.secondary}, 0 0 9px ${colors.secondary},
    0 0 10px ${colors.secondary}, 0 0 15px ${colors.secondary}; */
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 1000px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;
