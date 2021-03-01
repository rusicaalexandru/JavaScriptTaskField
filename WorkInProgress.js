//Acasa -> obiec javascript, tema 4.1 ..


//-------------------------------------------------------------------------------------------------Ex6.1
const user = {};
user.name = "Jhon";
user.surName = "Smith";
user.name = "Pete";
delete user.name;
console.log(user.name)
//-------------------------------------------------------------------------------------------------Ex6.2
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const calculate = () => {
    let sum = 0;
    for (a of Object.values(salaries)){
        sum += a;
    }
    return sum;
}
console.log(calculate());
