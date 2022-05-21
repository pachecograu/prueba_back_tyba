import Express from "express";
import { authentication } from '../controllers/authCtrl';
import exepciones from "../config/exepciones";

const router = Express.Router();

router.post('/', async (req, res) => {
    try {
        let response:any = await authentication(req);
        console.log(response);
        if (response && !response.code) {
            res.send(response);
        }else{
            throw response;
        }
    } catch (error:any) {
        console.log(error);
        
        exepciones(res, error.code, error.text);
    }
});

export default router;