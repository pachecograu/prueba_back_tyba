import express from 'express';
import userRoute from './routes/userRoute';
import historyRoute from './routes/historyRoute';
import authRoute from './routes/authRoute';
import registerRoute from './routes/registerRoute';
import logoutRoute from './routes/logoutRoute';
import { validateUser } from "./config/validUser";

const app  = express();
const PORT = 3000;

app.set('secretKey', 'pruebatyba123');
app.use(express.json());
app.use('/login' , authRoute);
app.use('/register' , registerRoute);
app.use('/users', validateUser , userRoute);
app.use('/logout', validateUser , logoutRoute);
app.use('/history', validateUser , historyRoute);

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});