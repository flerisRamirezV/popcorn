import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getMoviesRated } from "../actions/getMovies";
import { DetailMovie } from "../components/Detail";
import { InputMovie } from "../components/InputMovie";
import { MovieRated } from "../components/MovieRated";
import { MoviesFavorites } from "../components/MoviesFavorites";
import { MyFavoriteMovie } from "../components/myFavoriteMovie";
import PopularMovies from "../components/PopularMovies";
import TopRated from "../components/TopRated";

export const PopCorn = () => {
  const movies = useSelector((state) => state.movieReducer.movies);
  const moviesTop = useSelector((state) => state.movieReducer.moviesRated);
  const [modal, setModal] = useState(false);

  const [detailMovie, setDetailMovie] = useState({
    backdrop_path:"",
    id:null,
    original_language:"",
    overview:"",
    original_title:""
  })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getMoviesRated());
  }, []);

  const handleDetail=(mov)=>{
      setModal(!modal);
      
      setDetailMovie({
        backdrop_path:mov.backdrop_path,
        id:mov.id,
        original_language:mov.original_language,
        overview:mov.overview,
        original_title:mov.original_title
      })
  }
  return (
    <main className="container">
      <section className="container__input-movie">
        <InputMovie />
      </section>

      <MyFavoriteMovie />
      <PopularMovies />
      <section className="container__movie">
        {movies.length > 0 &&
          movies.map((movie) => <MoviesFavorites 
            key={movie.id} {...movie} 
            handleDetail={()=>handleDetail(movie)} 

         />)}
      </section>

      <TopRated />

      <section className="container__movie">
        {moviesTop.length > 0 &&
          moviesTop.map((movie) => <MovieRated key={movie.id} {...movie} />)}
      </section>

      {/* Modal Detail */}
      {
          modal&&  <DetailMovie 
                     handleDetail={(movie)=>handleDetail(movie)} 
                    detailMovie={detailMovie}  />
      }
     
    </main>
  );
};
