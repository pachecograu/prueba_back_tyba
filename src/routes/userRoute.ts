import Express from "express";
import { getApi } from '../controllers/userCtrl';
import exepciones from "../config/exepciones";

const router = Express.Router();

router.get('/', async (req, res) => {
    let response = await getApi(req.query);
    res.send(response);
});

export default router;