import { ADD_FORM_RESPONSE, REMOVE_FORM_RESPONSE, ADD_FORM_RESPONSE_LOADED } from "./constants";


export const addFormResponse = ( form ) => 
    ({
        type: ADD_FORM_RESPONSE,
        payload: form
    })


export const removeFormResponse = () => 
({
    type: REMOVE_FORM_RESPONSE,

})

export const addFormResponseLoaded = () => 
({
    type: ADD_FORM_RESPONSE_LOADED
})