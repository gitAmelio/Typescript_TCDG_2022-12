// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList'

// const linkedList = new LinkedList();
// linkedList.add(11);
// linkedList.add(1);
// linkedList.add(-8);
// linkedList.add(0);
// linkedList.add(6);
// const linkedListSorter = new Sorter(linkedList)
// linkedListSorter.sort();
// linkedList.print();

// const characters = new CharactersCollection('Xaaba');
// const stringSorter = new Sorter(characters);
// stringSorter.sort() 

const numbers = new NumbersCollection([10, 3, -5, 0]) 
numbers.sort()

const characters = new CharactersCollection('XAhszaar');
characters.sort()

const linkedList = new LinkedList();
linkedList.add(11);
linkedList.add(1);
linkedList.add(-8);
linkedList.add(0);
linkedList.add(6);
linkedList.sort();


console.log(numbers.data)
console.log(characters.data)
linkedList.print();

// console.log(stringSorter.collection);
// console.log(numbersSorter.collection);
// console.log(linkedListSorter.collection);
