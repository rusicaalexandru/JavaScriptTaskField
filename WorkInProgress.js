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
class Persone {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName(){
        return this.name
    }
    getSurname(){
        return this.surname
    }
    setSurname(_surname){
        this.surname = _surname;
        return _surname;
    }
}
const worker = new Persone("Ivan", "Ivanov");
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.setSurname("Petrov"));
console.log(worker.getSurname());