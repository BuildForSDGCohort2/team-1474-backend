import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Routes from './Routes/index.routes';

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1', Routes);

const port = process.env.PORT || 5000;

export const server  = app.listen(port,()=>{
console.log(`listening at ${port}`);
});

export default app;