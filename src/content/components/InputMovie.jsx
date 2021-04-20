import React from "react";
import "../styles/movie.css";
import { useDispatch,useSelector } from "react-redux";
import { saveDataInput, filterMovieData} from '../actions/filterData';

export const InputMovie = () => {
  
  const inputValue = useSelector(state => state.movieFavorites.inputValue)
  const dispatch = useDispatch();

  const filterByName = (e) => {
    dispatch(saveDataInput(e.target.value))
   
    setTimeout(()=>{
      
      dispatch(filterMovieData(e.target.value));
    },1000)
     
  };
  return (
    <div className="container__input">
      <input
        className="form__input"
        value={inputValue}
        onChange={filterByName}
      />
      <i className="fas fa-search form__icon"></i>
    </div>
  );
};
