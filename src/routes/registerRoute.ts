import Express from "express";
import { register } from '../controllers/registerCtrl';
import exepciones from "../config/exepciones";

const router = Express.Router();

router.post('/', async (req, res) => {
    try {
        let response:any = await register(req.body);
        if (response && response.code === 200) {
            res.send(response);
        }else{
            throw response;
        }
    } catch (error:any) {
        exepciones(res, error.code, error.text);
    }
});

export default router;