// ES6的語法
import Person from './person'

const p1 = new Person('John', 25);
const p2 = new Person();

console.log(p1.toJSON())
console.log(p2.toJSON())
