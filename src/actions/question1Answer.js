import GeoDecode from "../components/api/getGeoDecode";
import { ADD_G_MAPS_RESPONSE, REMOVE_G_MAPS_RESPONSE, ADD_G_MAPS_DECODE, REMOVE_G_MAPS_DECODE } from "./constants";

export const addGMapsResponse = (location) => ( {
        type: ADD_G_MAPS_RESPONSE,
        payload: location
    })
export const removeGMapsResponse = () => 
    ({
        type: REMOVE_G_MAPS_RESPONSE,
    })
export const addDecodeData = (address) => ( {
    type: ADD_G_MAPS_DECODE,
    payload: address
})
export  const removeDecodeData = (address) => ( {
    type: REMOVE_G_MAPS_DECODE,
    payload: address
})
export const fetchDecodeData = (location) => (dispatch) => {
      return dispatch(fetchData(location))
  }
const fetchData = location => dispatch => {
    return GeoDecode(location.lat, location.lng)
      .then(address => dispatch(addDecodeData(address)))
  }
