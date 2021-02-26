//Acasa -> obiec javascript, tema 4.1 ..
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
//-------------------------------------------------------------------------------------------------Ex3.2
//let students = [];
//const studentCount = prompt("How many students you will insert?");

// for (let i = 0; i < studentCount; i++) {
//     const studentName = prompt("Introduce student name!");
//     const gradeCount = prompt("How many grades student have?");
//     const studentGrades = [];
//     for (let o = 0; o < gradeCount; o++) { // add grades
//         studentGrades.push(+prompt("enter the grade"));
//     }
//     const medie = studentGrades.reduce((acc, val) => acc + val) / studentGrades.length; // calculate the sum of the grades and divide it by gradelds lenght
//     students.push({ Name: studentName, Medie: medie, Grades: studentGrades }); //push information to the array(students)

// }
//-----------
// students.push({ Name: "Dorin", Medie: 6, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students)
// students.push({ Name: "Marin", Medie: 3, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students)
// students.push({ Name: "Peter", Medie: 4, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students)
// students.push({ Name: "Sort", Medie: 8, Grades: [3, 4, 5, 7, 8] }); //push information to the array(students)

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
//-------------------------------------------------------------------------------------------------Ex3.4 Unfinished
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