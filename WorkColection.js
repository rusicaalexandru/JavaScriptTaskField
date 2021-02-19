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
//-----------------------------------------------------------------------------