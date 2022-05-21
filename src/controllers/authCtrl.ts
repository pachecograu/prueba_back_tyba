import { find as findUser } from "../models/userModel";
import { insert as insertHis } from "../models/historyModel";
import { insert as insertLogin } from "../models/loginModel";
const axios = require('axios');
const md5 = require('md5');
const jwt = require('jsonwebtoken')

export const authentication = async (req: any) => {
  try {
    console.log(req.body)
    if (req.body.username && req.body.password) {
      let user = await findUser(req.body);
      console.log('authenticate', user[2], md5(req.body.password));
      if (user[2] == md5(req.body.password)) {
        var token = jwt.sign({
          id: user[0]
        }, req.app.get('secretKey'), {
          expiresIn: '1h'
        });
        await serviceRgt(user, token);
        return {
          status: 'success',
          message: 'Bienvenido',
          user: {
            "id": user[0],
            "username": user[1],
            "creationDate": user[0].creationDate
          },
          token: token
        }
      } else {
        throw {
          code: 401,
          text: 'Usuario o contraseña invalida'
        }
      }
    } else {
      throw {
        code: 400,
        text: 'Parametros incorrectos'
      }
    }
  } catch (error) {
    return error
  }
}

async function serviceRgt(user: any, token:string) {
  await insertHis({
    user: user[1],
    transaction: 'Inicio de sesion',
    date: new Date()
  });
  await insertLogin({
    user: user[1],
    token: token,
    date: new Date()
  });
}