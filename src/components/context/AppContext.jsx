import { createContext, useContext, useState } from "react";
import { listOfUsers } from "../../constants/constants";
import useDebounce from "../../hooks/useDebounce";

const AppContext=createContext();

const AppProvider=({children})=>{
    const [selectedMovie,setSelectedMovie]=useState(null);

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
        setSelectedMovie:(e)=>onMovieSelect(e)
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