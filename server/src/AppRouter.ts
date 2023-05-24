import express from 'express';
 
// setup a singleton 
// making sure there only one router in the app
export class AppRouter {
    private static instance: express.Router;

    static getInstance(): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
 
        return AppRouter.instance;
    }
}