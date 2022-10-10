import React, {useState,useEffect} from "react";
import { useAppData } from "../context/AppContext";
import MovieCard from "../movieCard/MovieCard";
import Table from "../table/Table";
import './SelectedMovie.css';

const SelectedMovie=()=>{
    const {selectedMovie}=useAppData();
    const headers=[{firstName:'First name'},{lastName:'Last name'},{age:'Age'},{city:'City'},{image:'Image'}]
    const [query,setQuery]=useState('');
    const [userList,setUserList]=useState([]);

    useEffect(()=>{
        setUserList(selectedMovie?.users)
    },[selectedMovie])

    useEffect(()=>{
        setUserList(selectedMovie?.users.filter(user=>
            user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase())))
    },[query]);

    return(
        <div className="selected-container">
            {selectedMovie?.id ?
                <>
                    <MovieCard name={selectedMovie.name}
                                year={selectedMovie.year} 
                                genre={selectedMovie.genre} 
                                image={selectedMovie.image}
                                actors={selectedMovie.actors}
                    />
                    <input className="input" type='text' placeholder="Find user" value={query} onChange={e=>setQuery(e.target.value)}/>
                    <Table headers={headers} rows={userList}/>
                </>
                :
                <div className="no-movie-selected"><p>You haven't selected any movie.</p></div>
        
            }
        </div>
    )
}

export default SelectedMovie;