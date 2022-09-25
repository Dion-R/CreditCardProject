// const fruit = ['orange', 'bananan', 'lemon'];
// const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// const [john,,bob,,kelly] = friends;

// console.log(john, bob, kelly );

// let first = 'bob';
// let second = 'john';

// [second, first] = [first, second];

// console.log(first);
// console.log(second);

const bob =  {
    first: 'bob', 
    last: 'sanders', 
    city: 'chicago', 
    siblings: {
        sister: 'jane',
        brother: ['dion','max'] 
    }
}

const {siblings:{sister: favSister}} = bob 

// function person({first, last}) {
//     console.log(first);
//     console.log(last);
// }

// person(bob);

// const person = 'Peter Smith';
// const employee = '23456-emp-peter-smith';
// const manager = '23456-MAN-JOHN-DOE'

// console.log(person.startsWith('P'))

// console.log(employee.includes('emp'))

