import { combineReducers } from "redux";
import  {gMapsData, gMapsDecodeData } from "./googleMaps";
import {formData} from "./formResponse";
import { playedGameData } from "./playedGame";
import {s3Data} from "./s3Data";


const rootReducer = combineReducers ({
    gMapsData, formData, playedGameData, gMapsDecodeData, s3Data
})

export default rootReducer;