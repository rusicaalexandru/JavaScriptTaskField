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
const arr = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
const uniqueSorted = (array) => { //js / custome
    //js
    //return array.filter((v, i, a) => a.indexOf(v) === i);
    //custume
    array.sort((a, b) => a - b);
    return
}
//arr.filter((v, i, a) => a.indexOf(v) === i)
console.log(uniqueSorted(arr));