import React from "react";

export const Favorite = (props) => {
  return (
    <div className="container__image">
      <i
        className="fas fa-times-circle icon__popular--movie"
        onClick={props.handleDelete}
      ></i>

      <img
        src={
          props.backdrop_path == null
            ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
            : `https://image.tmdb.org/t/p/w500${props.backdrop_path}`
        }
        className="image"
        alt="image__movie"
      />
    </div>
  );
};
