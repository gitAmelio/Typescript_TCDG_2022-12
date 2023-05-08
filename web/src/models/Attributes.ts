export class Attributes<T extends object> { 
    constructor(private data: T) {}

    /**
     * <K extends keyof T> set up a generic contraint 
     * where K can be one of the keys of T
     * and K get passed as the key params
     * and the function returns the value in T at K
     */

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);  
    }

    getAll(): T {
        return this.data;
    }
}


// const attrs = new Attributes<IUserProps>({
//     id: 5,
//     age: 20,
//     name: 'whatever'
// });

// const name = attrs.get('name');
// const age = attrs.get('age');
// const id = attrs.get('id')