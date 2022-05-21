import { insert as insertHis } from "../models/historyModel";
import { insert as insertLogin, find as findLogin, update as updateLogin } from "../models/loginModel";
const jwt = require('jsonwebtoken')

export const logout = async (req: any) => {
  try {
    let token = req.headers['x-access-token'];
    if (token) {
      let user = await findLogin(token);
      if (user[2] == token) {
        await serviceRgt(user, token);
        await updateLogin(token);
        return {
          code: 200,
          descp: 'Usuario cerro sesion correctamente'
        };
      } else {
        throw {
          code: 401,
          text: 'parametros incorrectos'
        }
      }
    } else {
      throw {
        code: 500,
        text: 'error interno'
      }
    }
  } catch (error) {
    return error
  }
}

async function serviceRgt(user: any, token: string) {
  await insertHis({
    user: user[1],
    transaction: 'Cerro sesion',
    date: new Date()
  });
}