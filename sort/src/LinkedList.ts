import { Sorter } from './Sorter';

class Node {

    next: Node | null = null;

    constructor(public data: number) {}

}

export class LinkedList extends Sorter {

    constructor(){
        super();
    }

    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data)

        if(!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    get length(): number {
        if(!this.head) return 0;
        
        let length = 1;
        let node: Node | null = this.head;
        while (node.next){
            length++;
            node = node.next;
        }
        return length;
    }

    at(index: number): Node | null {
        if(!this.head) throw new Error('Index out of bounds');
        
        let counter = 0;
        let node: Node | null = this.head;
        while(node){
            if(counter === index) return node;
            
            counter++;
            node = node.next;
            
        }

        throw new Error('Index out of bounds');

    }

    compare(currIndex: number, nextIndex: number): boolean {
        if(!this.head) throw new Error('List is empty');

        const currNode = this.at(currIndex);
        if(!currNode) return false;
        const nextNode = this.at(nextIndex);
        if(!nextNode) return false;
        
        return currNode.data > nextNode.data
    }

    swap(currIndex: number, nextIndex: number): void {
        if(!this.head) return;

        const currNode = this.at(currIndex);
        if(!currNode) return;
        const nextNode = this.at(nextIndex);
        if(!nextNode) return;

        const leftHand = currNode.data;
        currNode.data = nextNode.data;
        nextNode.data = leftHand;
    }

    print(): void {
        if(!this.head) return;

        let result: number[] = [];
        let node: Node | null = this.head;
        while(node){
            result.push(node.data);
            node = node.next;
        }

        console.log(result);
    } 



}