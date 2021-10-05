import { ADD_G_MAPS_RESPONSE, REMOVE_G_MAPS_RESPONSE, ADD_G_MAPS_DECODE, REMOVE_G_MAPS_DECODE } from "../actions/constants";

import  { state  as initialState } from './initialState'

export const gMapsData = (state = initialState.gMapsDataState, action) => {
    const payload = action.payload

    switch (action.type) {
        case ADD_G_MAPS_RESPONSE:
            return {
                ...state,
                data: payload,
                loaded: true,
               
            }
        case REMOVE_G_MAPS_RESPONSE:
            return {
                ...state,
                loaded: false,
              
            }
        default: 
            return state
    }
}

export const gMapsDecodeData = (state = initialState.gMapsDecodeDataState, action) => {
    const payload = action.payload

    switch (action.type) {
        case ADD_G_MAPS_DECODE:
            return {
                ...state,
                data: payload,
                loaded: true,
               
            }
        case REMOVE_G_MAPS_DECODE:
            return {
                ...state,
                loaded: false,
              
            }
        default: 
            return state
    }
}