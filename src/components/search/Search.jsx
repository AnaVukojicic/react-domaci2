import React from "react";
import { useSearchData } from "../context/SearchContext";
import './Search.css';

const Search=({onSearch=()=>{}})=>{
    const{query,setQuery}=useSearchData();

    return(
        <div> 
            <input className="input" type={'text'} value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Find movie"/>
        </div>
    )
}

export default Search;