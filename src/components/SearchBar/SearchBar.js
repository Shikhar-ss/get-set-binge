import React, { useState, useEffect } from 'react'
import axios from "axios";
import API from "../../api";
function SearchBar() {



    const [searchValue, setSearch] = useState('')
    const [searchResult, saveSearchResult] = useState([])
    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearch(
            value
        )
    }

    const getSearchResponse = async () => {
        console.log('SEARCH_VALUE_: ', searchValue)
        const response = await API.get(`shows?q=${searchValue}`);
        console.log("RESPONSE_: ", response.data)
        return saveSearchResult(response.data);
    }

    useEffect(() => {
        getSearchResponse();
    }, [searchValue])

    return (
        <div>
            <form>
                <label>Search</label>
                <input type="text" name="searchbar" onChange={e => handleSearchChange(e)} />
            </form>
        </div>
    )
}

export default SearchBar
