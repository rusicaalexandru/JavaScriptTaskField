//acasa lucru cu funct de la array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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