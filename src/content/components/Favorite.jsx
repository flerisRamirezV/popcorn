import React from 'react'

export const Favorite=(props)=> {
    return (
        <div className="movie__fav">
           <p>{props.original_title.slice(0,9)}</p>
        </div>  
        )
}
