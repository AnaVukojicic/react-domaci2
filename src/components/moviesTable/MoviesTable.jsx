import React, { useEffect, useState } from "react";
import { listOfMovies } from "../../constants/constants";
import { useAppData } from "../../context/AppContext";
import useDebounce from "../../hooks/useDebounce";
import SearchField from "../search/Search";
import TableComponent from "../table/Table";
import SelectedMovie from '../selectedMovie/SelectedMovie'
import { Modal } from "antd";
import './MoviesTable.css'

const MoviesTable=()=>{
    const {setSelectedMovie,usersDivRef}=useAppData();
    const [sortedInfo, setSortedInfo] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [list,setList]=useState(listOfMovies);
    const [query,setQuery]=useState('');
    const debouncedQuery=useDebounce(query,1000)
    
    const headers=[
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },{
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            sorter: (a, b) => a.year - b.year,
            sortOrder: sortedInfo.columnKey === 'year' ? sortedInfo.order : null,
            ellipsis:true
        },{
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            sorter: (a, b) => a.genre.localeCompare(b.genre),
            sortOrder: sortedInfo.columnKey === 'genre' ? sortedInfo.order : null,
            ellipsis: true,
        }
    ];

    const setMoviesQuery=(term)=>{
        setQuery(term)
    }

    useEffect(()=>{
        setList(listOfMovies.filter(movie=>movie.name.toLowerCase().includes(query.toLowerCase())))
    },[debouncedQuery])

    const openModal=(record)=>{
        setSelectedMovie(record);
        setIsModalOpen(true)
    }

    const handleChange=(pagination,filters,sorter)=>{
        setSortedInfo(sorter);
    }

    const handleOk = () => {
        setIsModalOpen(false);
      };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        usersDivRef.current.style.display='none';
    };

    return(
        <div className="movies-table-container">
            <SearchField placeholder={query} onSearch={(e)=>setMoviesQuery(e)} inputPlaceholder="Find movie"/>
            <TableComponent headers={headers} 
                            rows={list} 
                            onRowClick={(record)=>openModal(record)} 
                            handleChange={(p,f,s)=>handleChange(p,f,s)}
            />
            <Modal maskClosable={false} 
                    centered width={"50%"} 
                    title="Info" 
                    open={isModalOpen} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
            >
                <SelectedMovie/>
            </Modal>
        </div>
    )
}

export default MoviesTable;