import { combineReducers } from "redux";
import  {gMapsData } from "./googleMaps";
import {formData} from "./formResponse";
import { playedGameData } from "./playedGame";

const rootReducer = combineReducers ({
    gMapsData, formData, playedGameData
})

export default rootReducer;