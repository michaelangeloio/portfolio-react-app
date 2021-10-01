import { ADD_G_MAPS_RESPONSE, REMOVE_G_MAPS_RESPONSE } from "./constants";


export const addGMapsResponse = ( location ) => 
    ({
        type: ADD_G_MAPS_RESPONSE,
        payload: location
    })


export const removeGMapsResponse = () => 
({
    type: REMOVE_G_MAPS_RESPONSE,

})
