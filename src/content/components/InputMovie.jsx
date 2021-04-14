import React, { useState } from "react";
import "../styles/movie.css";
import { useDispatch } from "react-redux";

export const InputMovie = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "FILTER_MOVIE",
      payload: e.target.value,
    });
    // setInputValue("")
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
