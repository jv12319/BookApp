import React,{useState} from "react";

function Search({term, searchKeyword}){

function handleChange(e){
    searchKeyword(e.target.value);
}

    return (
        <>
        <input type="text"
        value={term}
        placeholder="Enter books name"
        onChange={handleChange}></input>
        </>
    )
}

export default Search;