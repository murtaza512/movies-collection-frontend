import styled from "styled-components";
import { offWhite } from "../../../constants/color";

export const NotFoundContainer = styled.div`
  text-align: center;
  background-color: ${offWhite};
  padding: 50px;
  margin-top: 100px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const NotFoundTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  color: #666;
`;
