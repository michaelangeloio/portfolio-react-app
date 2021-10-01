import { PLAYED_GAME_RESPONSE } from "../actions/constants";

import  { state  as initialState } from './initialState'

export const playedGameData = (state = initialState.playedGameDataState, action) => {

    switch (action.type) {
        case PLAYED_GAME_RESPONSE:
            return {
                ...state,
              
                loaded: true,
               
            }
        default: 
            return state
    }
}