import styled from "styled-components";
import { colors } from "../../../styles/colors";

export interface IContainerProps {
  active: boolean;
}

export const Container = styled.button<IContainerProps>`
  display: flex;
  border: none;
  border-top: 1px solid
    ${(props) => (props.active ? colors.light : colors.transparent)};
  font-size: calc(12px);
  padding-block: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: -1px;
  background-color: ${colors.transparent};
  color: ${(props) => (props.active ? colors.light : colors.gray)};
`;
