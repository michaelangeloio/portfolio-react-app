import Axios from 'axios';

async function getAPIData() {
  try {

    

    const apiData = await Axios.get('https://nmdog5xf88.execute-api.us-east-1.amazonaws.com/dev/items')
    return (apiData)

  } catch (err) {
    console.error(err);
  }

}

export default getAPIData;
