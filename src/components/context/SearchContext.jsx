import { createContext, useContext, useEffect, useState } from "react";
import { listOfMovies } from "../../constants/constants";
import useDebounce from "../../hooks/useDebounce";

const SearchContext=createContext();

const SearchProvider=({children})=>{
    const [list,setList]=useState(listOfMovies)
    const [query,setQuery]=useState('');
    const debouncedQuery=useDebounce(query,1000);

    const onQueryChange=(term)=>{
        setQuery(term)
    }

    useEffect(()=>{
        setList(listOfMovies.filter(movie=>movie.name.toLowerCase().includes(query.toLowerCase())))
    },[debouncedQuery])


    const data={
        query:query,
        setQuery:(e)=>onQueryChange(e),
        list:list
    }

    return(
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchData=()=>{
    return useContext(SearchContext);
}

export default SearchProvider;