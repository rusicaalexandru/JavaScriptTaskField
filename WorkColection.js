//-----------------------------------------------------------------------------
//alert("Hi")
// var i;
// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
//----------------------------------------------------------------------------- do not execute that! 😨
// while (true) {
//     console.log("hello")
// }
//-----------------------------------------------------------------------------
// document.getElementById("bgColorR").addEventListener("click", function() {
//     document.body.style.backgroundColor = "red";
// })
// document.getElementById("bgColorG").addEventListener("click", function() {
//     document.body.style.backgroundColor = "green";
// })
// document.getElementById("bgColorB").addEventListener("click", function() {
//     document.body.style.backgroundColor = "blue";
// })
//-----------------------------------------------------------------------------collor buttons
// var elements = document.getElementsByClassName('Lisners');
// var i;
// for (i = 0; i < elements.length; ++i) {
//     elements[i].addEventListener('click', changeColor)
// }

// function changeColor() {
//     document.body.style.backgroundColor = this.getAttribute('data-color');
// }

// document.getElementsByClassName('Lisners').addEventListener("click", function() {
//         document.body.style.backgroundColor = this.getAttribute('data-color');
//     })
//-----------------------------------------------------------------------------change BG after time
// document.body.style.backgroundColor = "purple";
// document.body.style.transition = "all 3s";
// document.body.style.backgroundColor = "yellow";
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------Ex1
// const number = Number(prompt("Enter a number"));
// if (number > 0) {
//     alert(1);
// } else if (number === 0) {
//     alert(0);
// } else if (number < 0) {
//     alert(-1);
// } else {
//     alert("Error");
// }
//-----------------------------------------------------------------------------Ex2
// const age = prompt("Enter the age:");
// //v1
// if (age > 14 && age <= 90) {
//     alert("Находится в диапазоне 14 и 90 включительно.");
// } else if (age <= 14 && age > 90) {
//     alert("НЕ находится в диапазоне 14 и 90 включительно.");
// } else {
//     alert("Error");
// }
//v 2
// if (!(age > 14 && age <= 90)) {
//     alert("НЕ находится в диапазоне 14 и 90 включительно.");
// } else if (age > 14 && age <= 90) {
//     alert("Находится в диапазоне 14 и 90 включительно.");
// } else {
//     alert("Error");
// }
//-----------------------------------------------------------------------------Ex3
// const rightUsername = "admin";
// const rightPassword = "passport";
// let ussername = prompt("Username");
// if (ussername == rightUsername) {
//     let password = prompt("Password")
//     if (password === rightPassword) {
//         alert("Привет")
//     } else if (!password) {
//         alert("Validation Error")
//     } else {
//         alert("Wrong password")
//     }
// } else if (!ussername) {
//     alert("Validation Error")
// } else {
//     alert("Wrong username")
// }
//-----------------------------------------------------------------------------Ex4
// const start = prompt("Enter first number");
// const end = prompt("Enter second number");
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
//-----------------------------------------------------------------------------functie care ar calcula asa o expresie (  2x+y )
// const calculate = (x, y) => {
//   return 2 * x + y;
// }
// alert(calculate(5, 4));
//alert(calculate(+prompt("x"), +prompt("y")));
//alert(calculate(Number(prompt("x")), Number(prompt("y"))));
//-----------------------------------------------------------------------------
//creat un masiv din 5 elemente si calcyulat suma
//-----------------------------------------------------------Prin reduce
// const masiv = [1, 2, 3, 4, 5];
// console.log((masiv.reduce((a, b) => {
//     return a + b; //returneaza suma tuturor elementelor
// })));
// const notaMedie = () => {
//     const note = [5, 6, 8, 7, 9, 6, 6]
//     const sumaNotelor = note.reduce((a, b) => {
//         return a + b;
//     })
//     return sumaNotelor / note.length;
// }
// console.log(notaMedie());
//-----------------------------------------------------------Prin for
// const masiv = [1, 2, 3, 4, 5];
// const suma = () => {
//         let temp = 0;
//         for (let i = 0; i < masiv.length; i++) {
//             temp += masiv[i];
//         }
//         return temp;
//     }
//     //alert(suma());
// const note = [5, 6, 8, 7, 9, 6, 6];
// const notaMedie = () => {
//     let sum = 0;
//     for (let i = 0; i < note.length; i++) {
//         sum += note[i];
//     }
//     return sum / note.length;
// }
// alert(notaMedie());
//----------------------------------------------------------------------------- ArrayTasks(JavaScript.Info)//practice
/*
let arr = ["Jazz", "Blues"];
arr.push("Rock-n-Roll");
//arr[Math.floor((arr.length - 1) / 2)] = "Classics"; //example
arr[Math.floor(arr.length/2)] = "Classics";
//alert(arr);
arr.shift();
//alert(arr);
arr.unshift("Rap", "Reggae");
alert(arr);
*/
/*
let arr1 = ["Car", "Space", "Ball"];
let arr2 = ["apple", "orange"];
arr1 = arr2;
arr1.push("Bannana")
alert(arr1);
*/

/*for (let i = 0; i < 10; i++){ // == arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.push(arr.length+1);
}*/

/*
arr.shift(); //take first
arr.pop(); //take last

arr.unshift(FlyLy); //add to the begining
arr.push(FlyLy); // add to the end
*/

//alert( String(arr) === '1,2,3' ); // true
/*while (true){
    input = (Number(prompt("Entera number :")));
    arr.push(input);
    sum += input;
    if(input == "null" || input == null || input == "" ){
        break;
    }
}*/
//----------------------------------------------------------------------------- Array (remember)

//acasa lucru cu funct de la array

//----splice/slice
//arr.splice(3,2);
//arr.splice(0, 1, "Space", "fly");
//let removed = arr.splice(0, 2);//removed contains deleted elemets
//arr.slice(3, 8) // shows only (n1+1 -> n2) where : arr.slice(n1, n2)
//arr.slice(-3) //shows last 3 elements
//----
/*
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
*/
/*
//--------
const users = [
  {id: 1, name: "Fly"},
  {id: 2, name: "Space"},
  {id: 3, name: "Eren"}
];

let user = users.find(item => item.id == 3);

alert(user.name); // Eren
*/
/*
//--------
let users = [
    { id: 1, name: "Johny" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Harly" }
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
*/
//-----------------------------------------------------------------------------Tema de acasa / lucru in clasa
//-------------------------------------------------------------------------------------------------Ex3.1
// const howManyNumbers = prompt("How many numbers you will insert?");
// let arr = [];
// for (let i = 0; i < howManyNumbers; i++) { //Add numbers to array arr
//     arr.push(prompt(`Insert number ${i+1}`)); //+1 to start counting at 1 instead of 0
// }
//output for :
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//output while :
// let i = 0;
// while (i != arr.length) {
//     console.log(arr[i]);
//     i++;
// }
//output do While :
// let i = 0;
// do {
//     console.log(arr[i]);
//     i++
// } while (i != arr.length)
//output for in :
// for (let element in arr) {
//     console.log(arr[element]);
// }
//output for of :
// for (let element of arr) {
//     console.log(element);
// }
//output ForEach :
//arr.forEach(element => console.log(element));
//output Map :
//const mapArr = arr.map(elem => console.log(elem));
//-------------------------------------------------------------------------------------------------Ex3.2 Unfinished minimum 5 studenti, minim 4 note
// for (let i = 0; i < studentCount; i++) {
//     const studentName = prompt("Introduce student name!");
//     const gradeCount = prompt("How many grades student have?");
//     const studentGrades = [];
//     for (let o = 0; o < gradeCount; o++) { // add grades
//         studentGrades.push(+prompt("enter the grade"));
//     }
//     const medie = studentGrades.reduce((acc, val) => acc + val) / studentGrades.length; // calculate the sum of the grades and divide it by gradelds lenght
//     students.push({ Name: studentName, Medie: medie, Grades: studentGrades }); //push information to the array(students)
//
// }
// //-----------
// //students.push({ Name: "Dorin", Medie: 6, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students) // used for tests
// //students.push({ Name: "Marin", Medie: 3, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students) // used for tests
// //students.push({ Name: "Peter", Medie: 4, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students) // used for tests
// //students.push({ Name: "Sort", Medie: 8, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students)  // used for tests
//
// students.map(stud => { //show name and grades
//     console.log("Name :" + stud.Name + "\nNota medie :" + stud.Medie + "\nNotele :" + stud.Grades);
// });
// console.log("----------------------------------------------------------");
// students.map(stud => { // log student with grade <= 5
//     if (stud.Medie <= 5) {
//         console.log("Studentul cu nota mai mica sau egala cu 5 : \n" + stud.Name + " cu media : " + stud.Medie);
//     }
// });
// console.log("----------------------------------------------------------");

// students.sort((a, b) => a.Medie - b.Medie); // biggest grade and the lowest
// console.log(`Cea mai mica Medie si cea mai mare Medie : \n ${students[0].Medie} ${students[0].Name} \n ${students[students.length - 1].Medie} ${students[students.length - 1].Name}`);
// console.log(students.reverse()); // Descendent by Medie

// //Media of an student is bigger than Media of the entier class
// const medieClass = () => {
//     let sum = 0;
//     for (st of students) {
//         sum += st.Medie;
//     }
//     return sum / students.length;
// }
// students.map(stud => {
//     if (stud.Medie <= medieClass()) {
//         console.log("Studentii cu nota mai mare ca media clasei este " + stud.Name + "Cu media de :" + stud.Medie);
//     }
// });
//-------------------------------------------------------------------------------------------------Ex3.3
// let styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles.splice(styles.length / 2, 1, "Классика");
// console.log(styles);
// styles.shift(1);
// console.log(styles);
// styles.splice(0, 0, "Рэп", "Регги")
// console.log(styles);
//-------------------------------------------------------------------------------------------------Ex3.4 Unfinished if 0 add to list and contiue (stop on string, cancel)
// let arr = [];
// const sumInputNumbers = () => {
//     let sum = 0;
//     while (true) {
//         const input = (+prompt("Entera number :"));
//         if (input == "null" || input == null || input == "") {
//             return sum / arr.length;
//             break;
//         }
//         arr.push(input);
//         sum += input;
//     }
// }

// console.log(arr);
// console.log(sumInputNumbers());
//-------------------------------------------------------------------------------------------------Ex3.5
// const square = (x) => {
//     return x * x;
// }
// const arr = [1,2,3,4,5,6];
// const convert = (fn, array) => {
//     return array.map(num => fn(num));
//
// }
// console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(convert(square, arr));
// console.log(arr);
//-------------------------------------------------------------------------------------------------Ex3.6
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const func = (array) => {
//     array.splice(4,1, 0,0,0);
//     return array;
// }
// console.log(func(arr));
//-------------------------------------------------------------------------------------------------Ex3.7
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const showArray = (numStart, numEnd, array) => {
//     return array.slice(numStart-1, numEnd);
// }
// console.log(showArray(2,4, arr));
//-------------------------------------------------------------------------------------------------Ex3.8
// const colors = ["red", "green", "blue"];
// const checkColor = (color) => {
//     for (const col of colors){
//         if (color == col){
//             return colors.indexOf(color);
//         }
//     }
//     return -1
// }
// console.log(checkColor("red"));
//-------------------------------------------------------------------------------------------------Ex3.9
// const arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
// const filter = (array) => array.filter(Number);
//  console.log(filter(arr));
//-------------------------------------------------------------------------------------------------Ex3.10
// const arr = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
// const uniqueSorted = (array) => array.filter((v, i, a) => a.indexOf(v) === i);
// arr.sort((a,b) => a-b)
// console.log(uniqueSorted(arr));
//-------------------------------------------------------------------------------------------------Ex6
//-------------------------------------------------------------------------------------------------Ex6.1
// const user = {};
// user.name = "Jhon";
// user.surName = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user.name)
//-------------------------------------------------------------------------------------------------Ex6.2
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// const calculate = () => {
//     let sum = 0;
//     for (a of Object.values(salaries)){
//         sum += a;
//     }
//     return sum;
// }
// console.log(calculate());
//-------------------------------------------------------------------------------------------------Ex6.3 // not ready
// multiplyNumeric = (obj) => {
//
// }
//
// // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// console.log(multiplyNumeric(menu));
//-------------------------------------------------------------------------------------------------Next tasks would be in branches..
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
// class Validator { // Regex
//     static isEmail(str) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
//     }
//     static isDate(str) {
//         return  /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/.test(str);
//     }
//     static isPhone(str) {
//         return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(str);
//     }
//     static isDomain(str) {
//         return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(str);
//     }
// }
// const validator = new Validator();
//
// console.log(Validator.isEmail("phphtml@mail.ru"));
// console.log(Validator.isDate("12.05.2020"));
// console.log(Validator.isPhone("123-456-7890"));
// console.log(Validator.isDomain("google.com"));
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