let age: number = 50;
let club: string = 'Barcelona';
const isFamous: boolean = false;
age = 60;

function add(num1: any, num2: number | string) {
    return num1 + num2;
}
add(2, 77);
add('adam', 'sand');
add(1, 'someone');
console.log(club);

function fullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}

const user: string = fullName('Martin', 'Rock');

function doubleItAndConsole(num: number): void {
    const result = num * 2;
    console.log(result);
}

const output = doubleItAndConsole(15);
console.log('output', output);

let multiply2: (x: number, y: number) => number;

multiply2 = (x, y) => x * y;

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(25, 6));


const numbers: number[] = [1, 2, 3, 4, 5, 6];
numbers.push(7);
console.log(numbers);

const friends: string[] = ['Rifat', 'Risat'];
friends.push('Hasan');
let megaFriend = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaFriend.length) {
        megaFriend = friend;
    }
}
console.log('Largest name', megaFriend);

//object 
let player: {
    club: string,
    salary: number
}

player = {
    club: "barca",
    salary: 2000
}


const friend: {
    name: string;
    age: number;
} = {
    name: "rifat",
    age: 21
}

interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messy: Player = {
    name: "messy",
    club: "barca",
    salary: 45000000,
    wife: 'Antonela',
    isPlaying: true
}

const ronaldo: Player = {
    name: "ronaldo",
    club: "barca",
    salary: 45000000,
    isPlaying: true
}

function getBonus(player:Player,friends:string[]) {
    return player.salary * 0.1;
}

const poorPlayer = { age: 20, salary: 10000 };
getBonus(ronaldo,['as']);

class Person{
    name:string;
    private _partner : string ;
    readonly fatherName: string;
    constructor(name:string,father:string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName(){
        return this.name;
    }
}
const sam = new Person('Samuel','david');
console.log('name',sam.name);

const samName:string = sam.getName();
