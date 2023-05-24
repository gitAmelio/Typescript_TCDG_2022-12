import 'reflect-metadata';
import { RequestHandler } from 'express';
import { EMetadataKeys } from './EMetadataKeys';

export function use(middleware: RequestHandler) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        const middlewares = Reflect.getMetadata(
            EMetadataKeys.middleware, 
            target, 
            key
        ) || [];

        middlewares.push(middleware);

        Reflect.defineMetadata(EMetadataKeys.middleware, middlewares, target, key)
    }
}