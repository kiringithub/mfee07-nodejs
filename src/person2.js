class Person {
    constructor(name='bill', age=23) {
        this.name = name;
        this.age = age;
    }
    toJSON(){
        return JSON.stringify({
            name: this.name,
            age: this.age,
        })
    }
}
// ES6的語法，export可以很多個，default只有一個。
export default Person;