import 'reflect-metadata'

// const plane = {
//     color: 'red'
//     // note: 'hi there' // invisible property
// };

// Reflect.defineMetadata('note', '[ Hidden data on the plane ]', plane); // add to plane
// Reflect.defineMetadata('height', 10, plane);     
// Reflect.defineMetadata('note2', '[ Hidden data on the color property of plane ]', plane, 'color') // add to color property of plane

// console.log('Visible on plane ', plane)

// const planeMetadataNote = Reflect.getMetadata('note', plane);
// const planeMetadataHeight = Reflect.getMetadata('height', plane);
// const planeColorMetadataColorNote = Reflect.getMetadata('note2', plane, 'color')

// console.log();                  // add to plane
// console.log('planeMetadataNote: ', planeMetadataNote)
// console.log('planeMetadataHeight: ', planeMetadataHeight)
// console.log();                  // add to plane
// console.log('planeColorMetadataNote: ', planeColorMetadataColorNote)

@printMetadata
class Plane {
    color: string = 'red'; 
    
    @markFunction('456') 
    fly(): void {
        console.log('vrrrrrrr');
    }
} 

function markFunction(secretInfo: string){
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }
}

function printMetadata(target: typeof Plane) {
    const keys = Object.getOwnPropertyNames(target.prototype)
    console.log(keys)
    for (let key of keys) {
          const secret = Reflect.getMetadata('secret', target.prototype, key);
        if (secret) console.log(secret);
    }
}

