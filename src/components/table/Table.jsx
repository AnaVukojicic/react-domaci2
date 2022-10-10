import React from "react";
import './Table.css';

const Table=({headers=[],rows=[],onRowClick=()=>{}})=>{
    return(
        <div className="table-container">
            <table className="content-table">
                <thead>
                    <tr>
                        {Array.isArray(headers) &&
                            headers.map(header=>
                                Object.values(header).map((headerProperty,index)=>
                                    <th key={index}>{headerProperty.toString()}</th>    
                                )    
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(rows) &&
                        rows.map((row,index)=>
                            <tr key={index} onClick={()=>onRowClick(row)}>
                                {Object.keys(row).map(keyRow=>
                                    headers.map(header=>
                                        Object.keys(header).map(keyHeader=>
                                            keyRow===keyHeader && <td>{keyRow==='image' ? <img src={row[keyRow]} alt=""/> : row[keyRow]}</td>    
                                        )        
                                    )    
                                )}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;