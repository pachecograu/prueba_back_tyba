import { findAll as findAllHis, insert as insertHis } from "../models/historyModel";
import { find as findLogin } from "../models/loginModel";
const jwt = require('jsonwebtoken')

export const findTrans = async (req: any) => {
  try {
    let token = req.headers['x-access-token'];
    if (token) {
      let user = await findLogin(token);
      if (user[2] == token) {
        await serviceRgt(user, token);
        let result = await findAllHis();
        return {
          code: 200,
          data: result
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
    transaction: 'listar tansacciones',
    date: new Date()
  });
}