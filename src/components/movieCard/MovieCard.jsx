import React, { useRef } from "react";
import classes from './MovieCard.module.scss'

const MovieCard=({name,year,genre,image,actors,showUsers=()=>{}})=>{
    return(
        <div className={classes["movie-card"]}>
            <div className={classes["img-div"]}>
                <img src={image} alt={name}/>
            </div>
            <div className={classes["content-div"]}>
                <div><p><b>{name}</b></p></div>
                <div>
                    <p>Actors:<span> </span> 
                        {actors.map((actor,index,array)=>{
                            if(index===array.length-1){
                                return actor
                            }
                            return actor+", ";
                        })}
                    </p>
                </div>
                <div className={classes['buttons']}>
                    <button className={classes['trailerButton']}>Watch trailer</button>
                    <button className={classes['button']} onClick={showUsers}>Show users</button>
                </div>
                <div className={classes['info']}>
                    <p>{year}</p>
                    <p>{genre}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;