import { createTable as createTableUser, insert as insertUser, find as findUser } from "../models/userModel";
import { createTable as createTableHis, insert as insertHis } from "../models/historyModel";
const axios = require('axios');

createTableUser();

export const register = async (body: any) =>{
    try {
        console.log(body)
        if (body.username && body.password && body.name) {
            let user = await findUser(body);
            if (user && user[1] === body.username) {
                throw {
                    code: 500,
                    text: 'Este usuario ya existe'
                }
            }
            let res = await insertUser(body);
            await insertHis({
                user: '',
                transaction: 'registro de usuario',
                date: new Date()
            });
            return {
                code: 200,
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
}