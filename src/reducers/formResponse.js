import { ADD_FORM_RESPONSE, ADD_FORM_RESPONSE_LOADED, REMOVE_FORM_RESPONSE } from "../actions/constants";

import  { state  as initialState } from './initialState'

export const formData = (state = initialState.formDataState, action) => {
    const payload = action.payload

    switch (action.type) {
        case ADD_FORM_RESPONSE:
            return {
                ...state,
                data: payload,
                loaded: false,
         
            }
        case REMOVE_FORM_RESPONSE:
            return {
                ...state,
                loaded: false,
                
            }
        case ADD_FORM_RESPONSE_LOADED:
            return {
                ...state,
                loaded: true,
            }
        default: 
            return state
    }
}