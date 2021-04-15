import React, { useState } from "react";
import "../styles/movie.css";
import { useDispatch,useSelector } from "react-redux";
import {filterData} from '../actions/filterData';
export const InputMovie = () => {
  
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (e) => {
    setInputValue(e.target.value);
    setTimeout(()=>{
      dispatch(filterData(e.target.value));
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
