import React from "react";
import { useAppData } from "../context/AppContext";
import { useSearchData } from "../context/SearchContext";
import Search from "../search/Search";
import Table from "../table/Table";
import './MoviesTable.css'

const MoviesTable=()=>{
    const {setSelectedMovie}=useAppData();
    const headers=[{id:'Id'},{name:'Name'},{year:'Year'},{genre:'Genre'}];
    const {list,setList}=useSearchData();

    return(
        <div className="movies-table-container">
            <Search onSearch={(e)=>setList(e)}/>
            <Table headers={headers} rows={list} onRowClick={(e)=>setSelectedMovie(e)}/>
        </div>
    )
}

export default MoviesTable;