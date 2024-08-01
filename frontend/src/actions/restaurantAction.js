import axios from "axios"
import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant"

export const getRestaurants = () => {
    // dispatch the request
    return async(dispatch) => {
        try {
            // verbal order/cmd we can write, using dispatch
            dispatch({type: ALL_RESTAURANTS_REQUEST})               //  dipatch took object, of type request
            let link = `/api/v1/eats/stores`
            const {data} = await axios.get(link)                // here we have removed the backed using de-structure(i.e., const {data} = ...)
            console.log(data)
            const {restaurants, count} = data               // again de-structure, and get the restaurants and count. (check on: http://localhost:4000/api/v1/eats/stores)

            // we have successfully taken the data out of it. now..
            // dispatch the success
            dispatch({
                type: ALL_RESTAURANTS_SUCCESS,
                payload: {restaurants, count}                       // this is the data which will be sent to the store
            })
        } catch(err) {
            console.log(err)
        }
    }
}