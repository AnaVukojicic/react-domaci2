import React, {useState,useEffect} from "react";
import { useAppData } from "../../context/AppContext";
import useDebounce from "../../hooks/useDebounce";
import MovieCard from "../movieCard/MovieCard";
import SearchField from "../search/Search";
import TableComponent from "../table/Table";
import './SelectedMovie.css';

const SelectedMovie=()=>{
    const {selectedMovie,setShowUsers,showUsers}=useAppData();
    const [query,setQuery]=useState('');
    const [list,setList]=useState([]);
    const [sortedInfo, setSortedInfo] = useState({});
    const debouncedQuery=useDebounce(query,1000);

    const headers=[
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
            sorter: (a, b) => a.firstName.localeCompare(b.firstName),
            sortOrder: sortedInfo.columnKey === 'firstName' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName),
            sortOrder: sortedInfo.columnKey === 'lastName' ? sortedInfo.order : null,
            ellipsis: true,
        },{
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
            ellipsis:true
        },{
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            sorter: (a, b) => a.city.localeCompare(b.city),
            sortOrder: sortedInfo.columnKey === 'city' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render:  (text,record) => <img src={record.image} alt="" style={{width:100}}/>
        }
    ];

    const setUsersQuery=(term)=>{
        setQuery(term)
    }

    useEffect(()=>{
        setList(selectedMovie?.users)
    },[selectedMovie])

    useEffect(()=>{
        setList(selectedMovie?.users.filter(user=>
            user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase())))
    },[debouncedQuery]);

    const handleChange=(pagination,filters,sorter)=>{
        setSortedInfo(sorter);
    }

    const changeShowUsers=()=>{
        setShowUsers(true);
    }


    return(
        <div className="selected-container">
            {selectedMovie?.id ?
                <>
                    <MovieCard name={selectedMovie.name}
                                year={selectedMovie.year} 
                                genre={selectedMovie.genre} 
                                image={selectedMovie.image}
                                actors={selectedMovie.actors}
                                showUsers={changeShowUsers}
                    />
                    {showUsers &&
                        <div>
                        <SearchField onSearch={(e)=>setUsersQuery(e)} inputPlaceholder="Find user"/>
                        <TableComponent headers={headers} rows={list} handleChange={(p,f,s)=>handleChange(p,f,s)}/>
                        </div>
                    }
                </>
                :
                <></>
        
            }
        </div>
    )
}

export default SelectedMovie;