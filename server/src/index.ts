import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from  'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/LoginController'; // this is like pasting LoginController.ts here
import './controllers/RootController';
const app = express();

app.use(bodyParser.urlencoded({extended: true})); // add "body" prop to requests
app.use(cookieSession({ keys: ['laskdjf']}))
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log('Listening on port 3000'); 
})