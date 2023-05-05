// import { User } from './models/User';

// const user = new User({ name: 'myname', age: 20});

// user.on('change', () => {
//     console.log('Change #1');
// });
// user.on('change', () => {
//     console.log('Change #2');
// });
// user.on('save', () => {
//     console.log('Save was triggered')
// })

// user.on('someEvent', () => {});

// user.trigger('change')
// user.trigger('save')

// ------------ 2

// import axios from 'axios'

// // axios.post('http://localhost:3000/users', {
// //     name: 'myname',
// //     age: 20
// // });

// axios.get('http://localhost:3000/users/1');

// ------------ 3

import { User } from './models/User';

const user = new User({ name: 'new record', age: 0});

// user.fetch();

// setTimeout(() => {
//     console.log(user);
// }, 4000);

// user.set({name:"NEW NAME", age: 9999});

user.save()