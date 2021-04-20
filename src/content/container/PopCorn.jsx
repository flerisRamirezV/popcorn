import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getMoviesRated, getMovie } from "../actions/getMovies";
import { DetailMovie } from "../components/Detail";
import { InputMovie } from "../components/InputMovie";
import { MoviesFavorites } from "../components/MoviesFavorites";
import { MyFavoriteMovie } from "../components/myFavoriteMovie";
import PopularMovies from "../components/PopularMovies";
import TopRated from "../components/TopRated";
import { addFavorite } from "../actions/favorite";
import { movieFavorite } from "../actions/favorite";
import { toogleModal } from "../helpers/events";
import tryMovieList from "../sagas/movies/list";
export const PopCorn = () => {
  const moviesTop = useSelector((state) => state.movieReducer.moviesRated);
  const modal = useSelector((state) => state.movieFavorites.modal);

  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(getMovie());
    dispatch(getMoviesRated());
  }, [dispatch]);

  const handleDetail = (mov) => {
    dispatch(toogleModal(!modal));
    dispatch(movieFavorite(mov));
  };

  const movieList = useSelector((state) => {
    return state.movieReducer.filterMovie;
  });

  const addMovieFavorite = (mov) => {
    dispatch(addFavorite(mov));
    setTimeout(() => {
      dispatch(toogleModal(!modal));
    }, 1000);
  };

  return (
    <main className="container">
      <section className="container__input-movie">
        <InputMovie />
      </section>

      <MyFavoriteMovie />
      <PopularMovies />
      <section className="container__overflow">
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <MoviesFavorites
              key={movie.id}
              {...movie}
              handleDetail={() => handleDetail(movie)}
            />
          ))}
      </section>

      <TopRated />

      <section className="container__overflow">
        {moviesTop.length > 0 &&
          moviesTop.map((movie) => (
            <MoviesFavorites
              key={movie.id}
              {...movie}
              handleDetail={() => handleDetail(movie)}
            />
          ))}
      </section>

      {/* Modal Detail */}
      {modal && (
        <DetailMovie
          handleDetail={(movie) => handleDetail(movie)}
          addMovieFavorite={(mov) => addMovieFavorite(mov)}
        />
      )}
      {modal && (
        <DetailMovie
          handleDetail={(movie) => handleDetail(movie)}
          addMovieFavorite={(mov) => addMovieFavorite(mov)}
        />
      )}
    </main>
  );
};
