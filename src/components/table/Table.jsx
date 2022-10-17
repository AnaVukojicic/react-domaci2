import React from "react";
import './Table.css';
import { Table } from "antd";

const TableComponent=({headers=[],rows=[],onRowClick=()=>{},handleChange=()=>{}})=>{

    return(
        <div className="table-container">
            <Table columns={headers} 
                    dataSource={rows} 
                    onChange={(p,f,s)=>handleChange(p,f,s)}
                    onRow={(record) => {
                        return {
                          onClick: () => onRowClick(record)
                        }
                    }}
            />
        </div>
    )
}

export default TableComponent;