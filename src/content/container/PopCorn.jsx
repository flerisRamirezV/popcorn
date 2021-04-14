import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getMoviesRated } from "../actions/getMovies";
import { InputMovie } from "../components/InputMovie";
import { MovieRated } from "../components/MovieRated";
import { MoviesFavorites } from "../components/MoviesFavorites";
import { MyFavoriteMovie } from "../components/myFavoriteMovie";
import PopularMovies from "../components/PopularMovies";
import TopRated from "../components/TopRated";

export const PopCorn = () => {
  const movies = useSelector((state) => state.movieReducer.movies);
  const moviesTop = useSelector((state) => state.movieReducer.moviesRated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getMoviesRated());
  }, []);

  return (
    <main className="container">
      <section className="container__input-movie">
        <InputMovie />
      </section>

      <MyFavoriteMovie />
      <PopularMovies />
      <section className="container__movie">
        {movies.length > 0 &&
          movies.map((movie) => <MoviesFavorites key={movie.id} {...movie} />)}
      </section>
      <TopRated />
      <section className="container__movie">
        {moviesTop.length > 0 &&
          moviesTop.map((movie) => <MovieRated key={movie.id} {...movie} />)}
      </section>
    </main>
  );
};
