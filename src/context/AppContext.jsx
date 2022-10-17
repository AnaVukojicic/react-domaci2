import { createContext, useContext, useRef, useState } from "react";
import { listOfUsers } from "../constants/constants";

const AppContext=createContext();

const AppProvider=({children})=>{
    const [selectedMovie,setSelectedMovie]=useState(null);
    const usersDivRef=useRef(null);

    const onMovieSelect=(movieData)=>{
        const {id:movieId}=movieData;
        const usersWhoWatched=listOfUsers.filter(user=>{
            return user?.movies.includes(movieId);
        })
        setSelectedMovie({
            ...movieData,
            users:usersWhoWatched
        })
    }

    const data={
        selectedMovie:selectedMovie,
        setSelectedMovie:(e)=>onMovieSelect(e),
        usersDivRef:usersDivRef
    }

    return(
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppData=()=>{
    return useContext(AppContext);
}

export default AppProvider;