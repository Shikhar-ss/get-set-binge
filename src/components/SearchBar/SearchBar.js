import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import axios from "axios";
import {getSearchResponse} from "../../actions";

function SearchBar() {
    
    const [searchValue, setSearch] = useState('')
    // const [searchResult, saveSearchResult] = useState([])
    const handleSearchChange =async (e) => {
        const { value } = e.target;
        await setSearch(
            value
        );
        getSearchResponse(value);
        console.log("HANDLE_SEARCH_CHANGE___CALLED")
    }

    

    // useEffect(() => {
    //     // console.log("SEARCH_RESPONSE: ",[searchValue,searchResult])
    // }, [searchValue])

    return (
        <div>
            <form>
                <label>Search</label>
                <input type="text" name="searchbar" onChange={e => handleSearchChange(e)} />
            </form>
        </div>
    )
}

const mapStateToprops = (state) => {
    return{
        searchResult: state.searchResult,
        noResult: state.noResult
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(SearchBar)
