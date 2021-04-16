import React from "react";
import { useSelector, useDispatch} from "react-redux";
import "../styles/favorite.css";
import { Favorite } from "./Favorite";
import {deleteMovie} from '../actions/favorite'
export const MyFavoriteMovie = () => {
  const favorite = useSelector((state) => state.movieFavorites.favorite);
  const dispatch = useDispatch();

  const handleDelete=(id)=>{
    dispatch(deleteMovie(id))
  }
  return (
    <div className="favorite">
      <h2 className="favorite__title">My favorites</h2>
      <hr />
      {favorite.length === 0 && (
        <p className="favorite__p">You haven´t favorired any movies yet</p>
      )}
      <section className="container__movie">
        {favorite.map((fav, index) => (
          <Favorite key={fav.id} {...fav} handleDelete={()=>handleDelete(fav.id)} />
        ))}
      </section>
    </div>
  );
};
