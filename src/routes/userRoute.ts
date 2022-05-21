import Express from "express";
import { auth } from '../controllers/userCtrl';
import exepciones from "../config/exepciones";

const router = Express.Router();

router.get('/', async (req, res) => {
    let response = await auth(req.query);
    console.log(response);
    res.send(response);
});

export default router;