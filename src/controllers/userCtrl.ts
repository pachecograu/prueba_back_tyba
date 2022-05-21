import { insert as insertHis } from "../models/historyModel";

const axios = require('axios');
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client({});

export const getApi = async (query: any) => {
    console.log(query);

    try {
        await serviceRgt();
        client
        .elevation({
            params: {
                locations: [{ lat: query.lat, lng: query.lng }],
                key: 'AIzaSyD67zD3NxNeXmyYR_uAEBfm1n-SW9rmtag' //process.env.GOOGLE_MAPS_API_KEY
            },
            timeout: 1000 // milliseconds
        })
        .then((r:any) => {
            console.log(r.data.results[0].elevation);
        })
        .catch((e:any) => {
            console.log(e);
        });
    } catch (error) {
        return {
            code: 400,
            text: 'Parametros incorrectos'
        }
    }




    /* const options = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB02nnOntvpzPrms1wIzGU5hcHFZG8pDtQ&libraries=places'
      };
    let resHttp = await axios.request(options);
    console.log(resHttp.data)
    return resHttp.data */
}

async function serviceRgt() {
    await insertHis({
        user: '',
        transaction: 'busqueda de lugares',
        date: new Date()
    });
  }