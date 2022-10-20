import React, { useRef, useState } from "react";
import classes from './MovieCard.module.scss'

const MovieCard=({name,year,genre,image,actors,showUsers=()=>{}})=>{
    const [hover,setHover]=useState(false);

    return(
        <div className={classes["movie-card"]} 
            style={{backgroundImage:`linear-gradient(to right ,rgba(255,255,255,0.1),rgba(0,0,0,1),rgba(0,0,0,1)),url(${image})`}}
            onMouseOver={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <div className={classes["content-div"]}>
                <div className={classes["img-div"]}>
                    <img src={image} alt={name} style={{display: hover ? '' : 'none'}}/>
                </div>
                <div className={classes['title']}><p><b>{name}</b></p></div>
                <div className={classes['actors']}>
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
                    <button className={classes['trailer-button']}>Watch trailer</button>
                    <button className={classes['user-button']} onClick={showUsers}>Show users</button>
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