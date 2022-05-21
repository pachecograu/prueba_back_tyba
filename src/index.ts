import express from 'express';
import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';
import registerRoute from './routes/registerRoute';
import { validateUser } from "./config/validUser";

const app  = express();
const PORT = 3000;

app.set('secretKey', 'pruebatyba123');
app.use(express.json());
app.use('/login' , authRoute);
app.use('/register' , registerRoute);
app.use('/users', validateUser , userRoute);

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});