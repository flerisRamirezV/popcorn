import {all} from 'redux-saga/effects'
import {moviesSagasWatcher} from './movies/list';
import {searchMoviesWatcher} from './movies/filterMovies';
import {movieFavoriteWatcher} from '../sagas/movies/favorite';

export default function* rootSaga(){
    yield all([
        moviesSagasWatcher(),
        searchMoviesWatcher(),
        movieFavoriteWatcher(),  
    ])
}