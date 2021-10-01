import { ADD_FORM_RESPONSE, REMOVE_FORM_RESPONSE } from "../actions/constants";

import  { state  as initialState } from './initialState'

export const formData = (state = initialState.formDataState, action) => {
    const payload = action.payload

    switch (action.type) {
        case ADD_FORM_RESPONSE:
            return {
                ...state,
                data: payload,
                loaded: true,
         
            }
        case REMOVE_FORM_RESPONSE:
            return {
                ...state,
                loaded: false,
                
            }
        default: 
            return state
    }
}