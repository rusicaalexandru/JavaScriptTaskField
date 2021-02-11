//-----------------------------------------------------------------------------
//alert("Hi")
// var i;
// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
//-----------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------
var elements = document.getElementsByClassName('Lisners');
var i;
for (i = 0; i < elements.length; ++i) {
    elements[i].addEventListener('click', changeColor)
}

function changeColor() {
    document.body.style.backgroundColor = this.getAttribute('data-color');
}

// document.getElementsByClassName('Lisners').addEventListener("click", function() {
//         document.body.style.backgroundColor = this.getAttribute('data-color');
//     })
//-----------------------------------------------------------------------------
// document.body.style.backgroundColor = "purple";
// document.body.style.transition = "all 3s";
// document.body.style.backgroundColor = "yellow";
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------Ex1
const number = Number(prompt("Enter a number"));
if (number > 0) {
    alert(1);
} else if (number === 0) {
    alert(0);
} else if (number < 0) {
    alert(-1);
} else {
    alert("Error");
}
//-----------------------------------------------------------------------------Ex2
const age = prompt("Enter the age:");
//v1
if (age > 14 && age <= 90) {
    alert("Находится в диапазоне 14 и 90 включительно.");
} else if (age <= 14 && age > 90) {
    alert("НЕ находится в диапазоне 14 и 90 включительно.");
} else {
    alert("Error");
}
//v 2
if (!(age > 14 && age <= 90)) {
    alert("НЕ находится в диапазоне 14 и 90 включительно.");
} else if (age > 14 && age <= 90) {
    alert("Находится в диапазоне 14 и 90 включительно.");
} else {
    alert("Error");
}
//-----------------------------------------------------------------------------Ex3
const rightUsername = "admin";
const rightPassword = "passport";
let ussername = prompt("Username");
if (ussername == rightUsername) {
    let password = prompt("Password")
    if (password === rightPassword) {
        alert("Привет")
    } else if (!password) {
        alert("Validation Error")
    } else {
        alert("Wrong password")
    }
} else if (!ussername) {
    alert("Validation Error")
} else {
    alert("Wrong username")
}
//-----------------------------------------------------------------------------Ex4
const start = prompt("Enter first number");
const end = prompt("Enter second number");
for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}