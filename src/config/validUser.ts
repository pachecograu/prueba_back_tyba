import exepciones from "../config/exepciones";
const jwt = require('jsonwebtoken')

export function validateUser(req:any, res:any, next:any) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err:any, decoded:any) {
      console.log(err, decoded);
      if (err) {
        exepciones(res, 401, 'Usuario no logueado, porfavor intentelo de nuevo. ' + err);
        // res.json({
        //   status: "error",
        //   message: "Usuario no logueado, porfavor intentelo de nuevo.",
        //   data: err
        // });
      } else {
        // add user id to request
        console.log(decoded);
        req.body.userId = decoded.id;
        next();
      }
    });
  }