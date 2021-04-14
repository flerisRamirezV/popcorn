import React from 'react'

export const  MoviesFavorites=({backdrop_path,adult})=> {
    console.log("Esto es ",backdrop_path);
    return (
        <div className="container__image">
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                  className="image"/> 
        </div>
    )
}
