import React from 'react'
import {connect} from 'react-redux'

function SearchResult(props) {
    console.log("STORE_STATE_::",props)
    return (
        <div>
            <p>
                Search result!!!
            </p>

        </div>
    )
}

const mapStateToprops = (state) =>{
    return {
    searchResult: state.searchResult
    }
}


export default connect(mapStateToprops,null)(SearchResult)
