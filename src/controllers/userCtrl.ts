const axios = require('axios');

export const auth = async (query: any) => {
    console.log(query);
    //let res = await findAll();
    //console.log(res)

    const options = {
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/list/all'
      };
    let resHttp = await axios.request(options);
    console.log(resHttp.data)

    return `Su userName es ${query.userName}`;
}

/* export const find = async (body: any) =>{
    try {
        console.log(body)
        if (body.username && body.password && body.name) {
            let res = await insert(body);
            return {
                descp: 'Usuario registrado correctamente',
                row: res
            };
        }else{
           throw {
               code: 400,
               text: 'Parametros incorrectos'
           }
        }
    } catch (error) {
        return error
    }
} */