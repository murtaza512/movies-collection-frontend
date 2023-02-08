import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import { moviesHandler } from "../../module/movies/service";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@mui/material";
import { movieEndpoint } from "../../module/movies/constant/constant";
import { addMovie } from "../../redux/slices/movieSlice";
import {
  MovieListingContainer,
  PaginationContainer,
} from "./style/MovieListing";

export const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  const getMovies = async () => {
    const response = await moviesHandler(
      `${movieEndpoint.movies}/?page=${currentPage}`
    );

    dispatch(addMovie(response.data.movies));
    setPages(response.data.pages);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  return (
    <>
      <MovieListingContainer>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </MovieListingContainer>

      <PaginationContainer>
        <Pagination
          color="primary"
          count={pages}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </PaginationContainer>
    </>
  );
};
