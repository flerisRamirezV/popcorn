import React from 'react';
import { useSelector} from "react-redux";
import '../styles/favorite.css'
import {Favorite} from './Favorite';


export const  MyFavoriteMovie=()=> {
    const favorite = useSelector(state => state.movieFavorites.favorite)
  
   
    return (
        <div className="favorite"> 
            <h2 className="favorite__title">
                My favorites
            </h2>
            <hr/>
            {
                 favorite.length===0&&<p className="favorite__p">You haven´t favorired any movies yet</p>
            }
            <section className="favorite__section">
                {
                   
                     favorite.map((fav, index)=><Favorite key={index} {...fav}/>)
                }  
            </section>
         
        </div>
    )
}
