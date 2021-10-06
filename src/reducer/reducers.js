import { SEARCH_REPONSE_DATA_FAIL, SEARCH_REPONSE_DATA_PASS } from "../actions/actionTypes"
const initialState = {
    searchResult: null,
    noResult: false
}
const searchResponseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REPONSE_DATA_PASS: {
            console.log("INSIDE__REDUCER_: ")
            return {
                ...state, searchResult: action.paylaod, noResult: false
            }
        }
        case SEARCH_REPONSE_DATA_FAIL:
            return {
                ...state, noResult: true
            }
        default:
            return state;
    }


}
export default searchResponseReducer;