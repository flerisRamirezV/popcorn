import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../actions/getMovies';
import {InputMovie} from '../components/InputMovie';
import { MoviesFavorites } from '../components/MoviesFavorites';
import { MyFavoriteMovie } from '../components/myFavoriteMovie';
import PopularMovies from '../components/PopularMovies';
export const  PopCorn=()=> {
    const movies = useSelector((state) => state.movieReducer.movies);
    
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getMovies())
       
    }, [])
    console.log(movies)
    return (
        <main className="container">
            <section className="container__input-movie">
                 <InputMovie/>
            </section>
           
            <MyFavoriteMovie/>
            <PopularMovies/>
            <section className="container__movie">
                {
                  movies.length>0&& movies.map(movie=>
                    <MoviesFavorites key={movie.id} {...movie}/>)
                }
            </section>
        </main>
    )
}
