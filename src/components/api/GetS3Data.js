import Axios from 'axios';

async function getAPIData() {
  try {

    

    const apiData = await Axios.get('https://bcpx1k3939.execute-api.us-east-1.amazonaws.com/dev/items')
    return (apiData)

  } catch (err) {
    console.error(err);
  }

}

export default getAPIData;