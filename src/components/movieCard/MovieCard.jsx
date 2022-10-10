import React from "react";
import './MovieCard.css'

const MovieCard=({name,year,genre,image,actors})=>{
    return(
        <div className="movie-card">
            <div className="img-div">
                <img src={image} alt={name}/>
            </div>
            <div className="content-div">
                <p><b>{name}</b></p>
                <p>{year}</p>
                <p>{genre}</p>
                <p>Actors:<span> </span> 
                    {actors.map((actor,index,array)=>{
                        if(index===array.length-1){
                            return actor
                        }
                        return actor+", ";
                    })}
                </p>
            </div>
        </div>
    )
}

export default MovieCard;