import 'reflect-metadata';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AppRouter } from '../../AppRouter';
import { EMethods } from './EMethods';
import { EMetadataKeys } from './EMetadataKeys';



function bodyValidators(keys: string): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction) {
        console.log('First -',req.body)
        if(!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        
        console.log('Second - ',req.body)
        console.log('valid keys : ', keys )
        for (let key of keys) {
            if(!req.body[key]) {
                res.status(422).send(`Invalid request ${key} in ${JSON.stringify(req.body)}`);
                return;
            }
        }

        next();
    }
}

export function controller( routePrefix: string) {
    return function(target: Function) {
        console.log(`
        target.prototype => ${JSON.stringify(target.prototype)}
        routerPrefix => ${routePrefix}
        `)

        const router = AppRouter.getInstance();
        const keys = Object.getOwnPropertyNames(target.prototype)

        for (let key of keys) {
            const routeHandler = target.prototype[key];

            const path = Reflect.getMetadata(EMetadataKeys.path, target.prototype, key);
            const method: EMethods = Reflect.getMetadata(EMetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(EMetadataKeys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(EMetadataKeys.validator, target.prototype, key) || []; 

            const validator = bodyValidators(requiredBodyProps)

            const routePath = `${routePrefix}${path}`;
            console.log('checking path >>',routePath);

            // create a new express router and associate it
            // with routeHandler
            if (path) { 
                router[method](
                    routePath, 
                    ...middlewares, 
                    validator, 
                    routeHandler
                );
            }
        }
    };
}