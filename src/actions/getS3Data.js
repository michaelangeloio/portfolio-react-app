
import Axios from 'axios';

import {RETRIEVE_S3_DATA, RETRIEVE_S3_DATA_FAILURE} from './constants';


//PARSING

import parseData from '../components/api/parseData';

export const loadS3Data = () => async (dispatch) => {
    try {


    const apiData = await Axios.get('https://osdn1rxnr3.execute-api.us-east-1.amazonaws.com/dev/items');
    
    console.log(apiData.data)
    parseData(apiData.data)

    dispatch({
        type: RETRIEVE_S3_DATA,
        payload: apiData
    });
} catch (err) { 
    console.log(err);
    return {
        type: RETRIEVE_S3_DATA_FAILURE,
        payload: err
    }
}
}