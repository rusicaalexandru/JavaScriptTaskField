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
//----------------------------------------------------------Ex6.4
class Validator { // Regex
    static isEmail(str) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
    }
    static isDate(str) {
        return  /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/.test(str);
    }
    static isPhone(str) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(str);
    }
    static isDomain(str) {
        return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(str);
    }
}
const validator = new Validator();

console.log(Validator.isEmail("phphtml@mail.ru"));
console.log(Validator.isDate("12.05.2020"));
console.log(Validator.isPhone("123-456-7890"));
console.log(Validator.isDomain("google.com"));
//----------------------------------------------------------Ex6.5
// class User{
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//
//     }
//     getFullName(){
//         return `${this.name} ${this.surname}`
//     }
// }
//
// class Student extends User{
//     constructor(name, surname, year) {
//         super();
//         this.name = name;
//         this.surname = surname;
//         this.year = year;
//     }
//     getCourse(){
//         return  new Date().getFullYear() - this.year;
//     }
// }
//
// const student = new Student("Ivan", "Ivanov", 2018);
//
// console.log(student.name);
// console.log(student.surname);
// console.log(student.getFullName());
// console.log(student.year);
// console.log(student.getCourse());