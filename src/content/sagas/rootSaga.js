import {all} from 'redux-saga/effects'
import {moviesSagasWatcher, moviesRatedSagasWatcher} from './movies/list';
import {searchMoviesWatcher} from './movies/filterMovies'
import {saveMovieWatcher} from '../sagas/movies/favorite'
export default function* rootSaga(){
   
    yield all([
        moviesSagasWatcher(),
        moviesRatedSagasWatcher(),
        searchMoviesWatcher(),
        saveMovieWatcher(),
    ])
}