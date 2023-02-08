import styled from "styled-components";
import { Link } from "react-router-dom";
import { blue400 } from "../../../constants/color";

export const HeaderContainer = styled.header`
  background-color: ${blue400};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled(Link)`
  text-decoration: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: white;
  font-size: large;
  padding: 20px;
`;
