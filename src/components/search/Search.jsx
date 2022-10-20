import React from "react";
import classes from './Search.css'
import { Input } from "antd";
const { Search } = Input;

const SearchField=({onSearch=()=>{},placeholder,inputPlaceholder=''})=>{
    return(
        <div className="searchDiv">
            <Search placeholder={inputPlaceholder} 
                    allowClear value={placeholder} 
                    onChange={(e)=>onSearch(e.target.value)} 
                    style={{ width: 200}}
            />
        </div>
    )
}

export default SearchField;