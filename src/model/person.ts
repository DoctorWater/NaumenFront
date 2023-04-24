export class Person {
    name: string;
    age: number;

    constructor(name = "", age = 999){
        this.name = name;
        this.age = age;
    }
}
