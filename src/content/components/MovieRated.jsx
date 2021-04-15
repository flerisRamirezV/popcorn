import React from "react";

export const MovieRated = ({ poster_path, handleModal}) => {
  return (
    <article className="container__image">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="image"
        onClick={handleModal}
        alt="movie"
      />
    </article>
  );
};
