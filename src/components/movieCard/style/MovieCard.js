import styled from "styled-components";
import { black, lightGray } from "../../../constants/color";
import { Roboto } from "../../../constants/font";

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${lightGray};
  color: ${black};
  width: 350px;
  height: 450px;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
`;

export const MovieCardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  margin-bottom: 20px;
`;

export const MovieCardTitle = styled.h2`
  font-size: 24px;
  font-family: ${Roboto};
`;

export const MovieCardDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-family: ${Roboto};
`;
