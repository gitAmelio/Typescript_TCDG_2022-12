import 'reflect-metadata';
import { RequestHandler } from 'express';
import { EMethods } from './EMethods';
import { EMetadataKeys } from './EMetadataKeys';

// Constrain the decorator to RequestHandlers
interface RouteHandlerDescriptor extends PropertyDescriptor {
    //  the function the decorator is applied to
    value?: RequestHandler
}

function routeBinder(method: string) {
    return function(subPath: string) {
        console.log('factory path: ', subPath );
        return function(target: any, key: string, desc: RouteHandlerDescriptor){
            Reflect.defineMetadata(EMetadataKeys.path, subPath, target, key);
            Reflect.defineMetadata(EMetadataKeys.method, method, target, key);
        }
    } 
}

export const get   = routeBinder(EMethods.get);
export const put   = routeBinder(EMethods.put);
export const post  = routeBinder(EMethods.post);
export const del   = routeBinder(EMethods.del);
export const patch = routeBinder(EMethods.patch);
