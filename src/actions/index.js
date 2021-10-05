import API from "../api";
import { SEARCH_REPONSE_DATA_PASS, SEARCH_REPONSE_DATA_FAIL } from "./actionTypes"

export const getSearchResponse = (value) => {
    // const response = await API.get(`shows?q=${value}`);
    // console.log('QUERYPARAMETER: ',value)
    console.log("INSIDE_ACTION_:", value)
    return (dispatch) => {
        return API.get(`shows?q=${value}`).then((res) => {
            console.log("API_RESPONSE_: ", res.data)
            dispatch(() => {
                return { type: SEARCH_REPONSE_DATA_PASS, payload: res.data }
            }
            )

        }).catch((err) => {
            console.log("ERROR!!!", [SEARCH_REPONSE_DATA_FAIL])
            dispatch(() => {
                return { type: SEARCH_REPONSE_DATA_FAIL, payload: err }
            })
        })

    }
}