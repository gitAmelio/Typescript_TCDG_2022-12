import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter { 
    constructor( public data: number[]) {
        super();
    }

    get length(): number {
        return this.data.length
    }

    compare( currIndex: number, nextIndex: number): boolean {
        return this.data[currIndex] > this.data[nextIndex];
    }

    swap(currIndex: number, nextIndex: number): void {
        const leftHand = this.data[currIndex];
        this.data[currIndex] = this.data[nextIndex];
        this.data[nextIndex] = leftHand;
    }
}