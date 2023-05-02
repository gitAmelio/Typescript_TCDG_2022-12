import { Sorter } from './Sorter';


export class CharactersCollection extends Sorter { 
    constructor( public data: string ) {
        super();
    }

    get length(): number {
        return this.data.length
    }

    compare(currIndex: number, nextIndex: number) {
        const str = this.data;
        return str[currIndex].toLowerCase() > str[nextIndex].toLowerCase();
    }

    swap(currIndex: number, nextIndex: number): void {
        const characters = this.data.split('');
        const leftHand = characters[currIndex];
        characters[currIndex] = characters[nextIndex];
        characters[nextIndex] = leftHand;
        this.data = characters.join('');
    }
}