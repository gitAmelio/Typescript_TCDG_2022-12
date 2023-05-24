@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
       return  `This boats color is ${this.color}`;
    }

    @logError('Oops. boat was sunk in ocean')
    pilot(): void {
       throw new Error(); 
       console.log('swish');
    }

    pilot2(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        // do something
    }
}

function newLine () {
    console.log();
}


// function classDecorator(constructor: Function) { // or
function classDecorator(constructor: typeof Boat) {
    console.log('classDecorator ',constructor)
    newLine()
    
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log('parameterDecorator' ,key, index)
    newLine()
}

function testDecorator(target: any, key: string) {
    // the first argument of a decorator is the prototype of the class 
    // and the prototype only have access to the method properties
    // and not instance properties where the latter gets define inside the constructor,
    // therefore:
    console.log(target[key]) // will result in undefined

    console.log(target, Object.getOwnPropertyNames( target))
    console.log(key)
    newLine()
}
    
function logError(errorMsg: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        console.log('Target:', target); // this show an empty object
        console.log('Key:', key);       
        const keys = Object.getOwnPropertyNames(target) // this returns all the properties and 
                                                        // methods of as string names in an array.
        console.log('Object.getOwnPropertyNames():', keys)
        for (let key of  keys) {
            console.log(target[key]);
        }
        newLine()
        const method = desc.value;
        desc.value = function () {
            try {
                method()
            } catch (e) {
                console.log(errorMsg);
            }
        }
        newLine()
    }
}

const car = { make: 'honda', year: 2000 }

Object.defineProperty(car, 'make', {writable: false});
const make = Object.getOwnPropertyDescriptor(car, 'make')
console.log( make )
// car.make = 'another make'; // this throw an an error 'Cannot assign to read only property '
console.log(car)


// new Boat().pilot(); // testing the factory's error catching
