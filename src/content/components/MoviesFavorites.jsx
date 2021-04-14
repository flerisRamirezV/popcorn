import React from "react";

export const MoviesFavorites = ({ backdrop_path, handleDetail }) => {
  return (
    <div className="container__image">
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        className="image"
        onClick={handleDetail}
      />
    </div>
  );
};
