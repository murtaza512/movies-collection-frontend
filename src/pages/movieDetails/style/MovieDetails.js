import styled from "styled-components";
import { black } from "../../../constants/color";
import { Roboto } from "../../../constants/font";

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
`;

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: azure;
`;

export const MoviePoster = styled.img`
  width: 350px;
  height: 500px;
  margin: 20px;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MovieTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${black};
  font-family: ${Roboto};
`;

export const MovieGenre = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${black};
  font-family: ${Roboto};
`;

export const MovieOwner = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${black};
  font-family: ${Roboto};
`;

export const MoviePrice = styled.p`
  font-size: 18px;
`;

export const ImageContainer = styled.div`
  flex: 1;
`;
