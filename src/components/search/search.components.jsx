import React from 'react'
import './search.styles.css'
export const SearchBox=({placeholder,handleChange})=>{
return  (
            <input
            className="SearchBox" 
            type="search"
            placeholder={placeholder}
            onChange={handleChange}/>
        )
}