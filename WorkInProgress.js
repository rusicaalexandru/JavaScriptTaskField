//Tema pentru acasa 04.03.2021
//----------------------------------------------------------Ex6
//----------------------------------------------------------Ex6.1
// class Persone {
//     constructor(name, surName) {
//         this.name = name;
//         this.surName = surName;
//     }
// }
// const person = new Persone("Ivan", "Ivanov");
// console.log(person);
//
// console.log(person.name);
// console.log(person.surName);
//----------------------------------------------------------Ex6.2
// class Persone {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getName(){
//         return this.name
//     }
//     getSurname(){
//         return this.surname
//     }
//     setSurname(_surname){
//         this.surname = _surname;
//         return _surname;
//     }
// }
// const worker = new Persone("Ivan", "Ivanov");
// console.log(worker.getName());
// console.log(worker.getSurname());
// console.log(worker.setSurname("Petrov"));
// console.log(worker.getSurname());
//----------------------------------------------------------Ex6.5
class User{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;

    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

class Student extends User{
    constructor(name, surname, year) {
        super();
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getCourse(){
        return  new Date().getFullYear() - this.year;
    }
}

const student = new Student("Ivan", "Ivanov", 2018);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());