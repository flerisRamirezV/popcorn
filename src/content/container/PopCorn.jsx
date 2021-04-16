import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getMoviesRated } from "../actions/getMovies";
import { DetailMovie } from "../components/Detail";
import { InputMovie } from "../components/InputMovie";
import { MoviesFavorites } from "../components/MoviesFavorites";
import { MyFavoriteMovie } from "../components/myFavoriteMovie";
import PopularMovies from "../components/PopularMovies";
import TopRated from "../components/TopRated";
import { addFavorite } from "../actions/favorite";
import {saveMovieFavorite} from '../actions/favorite';

export const PopCorn = () => {
  const moviesTop = useSelector((state) => state.movieReducer.moviesRated);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getMoviesRated());
  }, []);

  const handleDetail = (mov) => {
    setModal(!modal);
    
    dispatch(saveMovieFavorite(mov))
  };
  
  const movieList = useSelector((state) => {
    return state.movieReducer.filterMovie;
  });

  const addMovieFavorite = (mov) => {
    dispatch(addFavorite(mov));
    setTimeout(() => {
      setModal(!modal);
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
        {movieList.map((movie) => (
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
