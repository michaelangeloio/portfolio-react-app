import { combineReducers } from "redux";
import  {gMapsData, gMapsDecodeData } from "./googleMaps";
import {formData} from "./formResponse";
import { playedGameData } from "./playedGame";


const rootReducer = combineReducers ({
    gMapsData, formData, playedGameData, gMapsDecodeData
})

export default rootReducer;