

import {RETRIEVE_S3_DATA, RETRIEVE_S3_DATA_FAILURE} from './constants';


//PARSING

import parseData from '../components/api/parseData';
import {API} from 'aws-amplify';
import awsconfig from '../aws-exports';

API.configure(awsconfig)

function getData() { 
    const apiName = 'marwebapp';
    const path = '/items';
    const myInit = { // OPTIONAL
      headers: {}, // OPTIONAL
    };
  
    return API.get(apiName, path, myInit);
  }
  

export const loadS3Data = () => async (dispatch) => {
    try {


    // const apiData = await Axios.get('https://nmdog5xf88.execute-api.us-east-1.amazonaws.com/dev/items');
    
    const apiData = await getData();

    console.log(apiData)
    parseData(apiData)

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