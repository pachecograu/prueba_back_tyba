import Express from "express";
import { getApi } from '../controllers/userCtrl';
import exepciones from "../config/exepciones";

const router = Express.Router();

router.get('/places', async (req, res) => {
    try {
        let response = await getApi(req.query);
    res.send(response);
    } catch (error:any) {
        exepciones(res, error.code, error.text);
    }
});

export default router;