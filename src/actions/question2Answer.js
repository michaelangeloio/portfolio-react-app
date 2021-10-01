import { ADD_FORM_RESPONSE, REMOVE_FORM_RESPONSE } from "./constants";


export const addFormResponse = ( form ) => 
    ({
        type: ADD_FORM_RESPONSE,
        payload: form
    })


export const removeFormResponse = () => 
({
    type: REMOVE_FORM_RESPONSE,

})
