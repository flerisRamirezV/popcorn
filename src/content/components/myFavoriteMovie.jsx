import React from 'react'
import '../styles/favorite.css'
export const  MyFavoriteMovie=()=> {
    return (
        <div className="favorite"> 
            <h2 className="favorite__title">
                My favorites
            </h2>
            <hr/>
            <p className="favorite__p">You haven´t favorired any movies yet</p>
        </div>
    )
}
