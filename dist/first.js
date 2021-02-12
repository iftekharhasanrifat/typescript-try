"use strict";
let age = 50;
let club = 'Barcelona';
const isFamous = false;
age = 60;
function add(num1, num2) {
    return num1 + num2;
}
add(2, 77);
add('adam', 'sand');
add(1, 'someone');
console.log(club);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Martin', 'Rock');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(15);
console.log('output', output);
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7);
console.log(numbers);
const friends = ['Rifat', 'Risat'];
friends.push('Hasan');
let megaFriend = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaFriend.length) {
        megaFriend = friend;
    }
}
console.log('Largest name', megaFriend);
//object 
let player;
player = {
    club: "barca",
    salary: 2000
};
const friend = {
    name: "rifat",
    age: 21
};
const messy = {
    name: "messy",
    club: "barca",
    salary: 45000000,
    wife: 'Antonela',
    isPlaying: true
};
const ronaldo = {
    name: "ronaldo",
    club: "barca",
    salary: 45000000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 20, salary: 10000 };
getBonus(ronaldo, ['as']);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'david');
console.log('name', sam.name);
const samName = sam.getName();
