import {  RETRIEVE_S3_DATA, RETRIEVE_S3_DATA_FAILURE } from "../actions/constants";

import  { state  as initialState } from './initialState'

export const s3Data = (state = initialState.s3DataState, action) => {
    const payload = action.payload

    switch (action.type) {
        case RETRIEVE_S3_DATA:
            return {
                ...state,
                data: payload,
                loaded: true,
               
            }
        case RETRIEVE_S3_DATA_FAILURE:
            return {
                ...state,
                loaded: false,
              
            }
        default: 
            return state
    }
}