const axios = require('axios');

export const getApi = async (query: any) => {
    console.log(query);

    const options = {
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/list/all'
      };
    let resHttp = await axios.request(options);
    console.log(resHttp.data)
    return resHttp.data
}