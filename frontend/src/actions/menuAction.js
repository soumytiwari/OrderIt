import axios from "axios";
import { GET_MENUS_SUCCESS, GET_MENUS_REQUEST, GET_MENUS_FAIL } from "../constants/menuConstants";


export const getMenus = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_MENUS_REQUEST })
        const response = await axios.get(`/api/v1/eats/stores/${id}/menus`)
        // console.log(response);
        console.log(response.data.data[0].menu);
        // aren't destructured it
        // const { data } = await axios.get(`/api/v1/eats/stores/${id}/menus`)
        // console.log(data);


        // for success
        dispatch({
            type: GET_MENUS_SUCCESS,
            payload: response.data.data[0].menu,
        })
    } catch (error) {
        dispatch({
            type: GET_MENUS_FAIL,
            payload: error.message,
        })
    }
}


// export const getMenus = () => {
    
//     return async(dispatch) => {
//         try {
//             dispatch({ type: GET_MENUS_REQUEST })
//             let link = `/api/v1/eats/items/:storeId`
//             const { data } = await axios.get(link)
//             console.log(data)
//             const { menus, count } = data

//             dispatch({
//                 type: GET_MENUS_SUCCESS,
//                 payload: { menus, count }
//             })
//         } catch (err) {
//             dispatch({
//                 type: GET_MENUS_FAIL,
//                 payload: err.response.data.message
//             })
//         }
//     }
// }

