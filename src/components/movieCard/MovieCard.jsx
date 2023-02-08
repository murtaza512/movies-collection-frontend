import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MovieCardContainer,
  MovieCardImage,
  MovieCardTitle,
  MovieCardDescription,
} from "./style/MovieCard";
const MovieCard = ({ movie }) => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte(`/movies/${movie.id}`);
  };

  return (
    <MovieCardContainer onClick={handleClick}>
      <MovieCardImage src={movie.thumbnail} alt="thumbnail" />
      <MovieCardTitle>{movie.name}</MovieCardTitle>
      <MovieCardDescription>{movie.genre}</MovieCardDescription>
    </MovieCardContainer>
  );
};

export default MovieCard;
