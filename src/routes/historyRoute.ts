import Express from "express";
import { findTrans } from '../controllers/historyCtrl';
import exepciones from "../config/exepciones";

const router = Express.Router();

router.get('/', async (req, res) => {
    try {
        let response:any = await findTrans(req);
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