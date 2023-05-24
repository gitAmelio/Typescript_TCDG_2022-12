import 'reflect-metadata';
import { EMetadataKeys } from './EMetadataKeys';
 
export function bodyValidator(...keys: string[]) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(EMetadataKeys.validator, keys, target, key);
    }
}
