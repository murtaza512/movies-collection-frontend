import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesHandler } from "../../module/movies/service";
import NotFound from "../../components/errors/NotFound";
import { movieEndpoint } from "../../module/movies/constant/constant";
import {
  MovieContainer,
  MovieCard,
  ImageContainer,
  MoviePoster,
  MovieDescription,
  MovieTitle,
  MovieGenre,
  MovieOwner,
  MoviePrice,
} from "./style/MovieDetails";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const response = await moviesHandler(`${movieEndpoint.movies}/${id}`);
    setMovie(response.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return movie ? (
    <MovieContainer>
      <MovieCard>
        <ImageContainer>
          <MoviePoster src={movie.thumbnail} alt={movie.name} />
          <MoviePoster src={movie.image} alt="movie-poster" />
        </ImageContainer>

        <MovieDescription>
          <MovieTitle>{movie.name}</MovieTitle>
          <MovieGenre>Genre: {movie.genre}</MovieGenre>
          <MovieOwner>Owner: {movie.owner}</MovieOwner>
          <MoviePrice>Market Price: {movie.market_price}</MoviePrice>
        </MovieDescription>
      </MovieCard>
    </MovieContainer>
  ) : (
    <NotFound />
  );
};
