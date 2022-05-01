import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  flex-direction: column;
  max-width: 1000px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex: 1;
  border-top: 1px solid ${colors.whiteTransparent};
  justify-content: center;
`;
