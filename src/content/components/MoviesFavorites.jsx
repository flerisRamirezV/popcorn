import React from "react";

export const MoviesFavorites = ({ backdrop_path, handleDetail }) => {
  
  return (
    <div className="container__image">
      <img
        src={backdrop_path==null?"https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg":`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        className="image"
        onClick={handleDetail}
      />
    </div>
  );
};
