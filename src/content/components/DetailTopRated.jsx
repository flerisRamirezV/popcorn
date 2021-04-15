import React from "react";

export const DetailTopRated = (props) => {
  return (
    <div className="content_modal">
      <div className="modal__movie">
        <div className="card card__content">
          <div className="d-flex justify-content-end">
            <button className="button" onClick={props.handleModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="card-body">
            <img
              className="img__modal"
              src={`https://image.tmdb.org/t/p/w500/${props.detailMovie.backdrop_path}`}
              alt="movie"
            />
            <p>
              <b>Titulo:</b> <span>{props.detailMovie.original_title}</span>
            </p>
            <p>
              <b>Lenguaje:</b>{" "}
              {props.detailMovie.original_language.toUpperCase()}
            </p>
            <p>
              <b>Información:</b>
              {props.detailMovie.overview.slice(0, 100)}
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="button"
              onClick={() => props.addMovieFavorite(props.detailMovie)}
            >
              <i className="fas fa-heart favorite__icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
