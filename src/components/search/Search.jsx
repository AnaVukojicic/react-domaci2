import React from "react";
import classes from './Search.module.scss'
import { Input } from "antd";
const { Search } = Input;

const SearchField=({onSearch=()=>{},placeholder,inputPlaceholder=''})=>{
    return(
        <div className={classes["searchDiv"]}>
            <Search placeholder={inputPlaceholder} 
                    allowClear value={placeholder} 
                    onChange={(e)=>onSearch(e.target.value)} 
                    style={{ width: 200, borderRadius:12 }}
            />
        </div>
    )
}

export default SearchField;