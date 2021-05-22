let pizzaList = [
    {name:"peperoni",price:80},
    {name:"pasta",price:85},
    {name:"capricioasa",price:80},
    {name:"bento",price:90},
    {name:"taraneasca",price:100},
    {name:"dio",price:130},
    {name:"abdul",price:60},
    {name:"monako",price:750}
];
let pizTipBlat = [
    {name:"gros",price:20},
    {name:"subtire",price:15}
];

let pizFormBlat = [
    {name:"rotundă",price:25},
    {name:"ovală",price:20}
]
let pizType = [
    {name:"Capriciossa",price:25},
    {name:"Rancho ",price:20}
];
let pizSize = [
    {name:"mini",price:20},
    {name:"normală ",price:30},
    {name:"maxi ",price:40}
];
let customPizza = [

];
document.addEventListener("DOMContentLoaded", () => {
    loadContent();
    createCustomePizza();
    /*document.getElementById("customeButton").addEventListener("click", () =>{ //temp
        createCustomePizza();
    });*/
})
let pizzaID = 1;
const loadContent = () => {
    const container = document.getElementById("container");
    for(const i of pizzaList) //spawn elements from DB of pizzas
    {
        let el = document.createElement("div");
        el.className ="item";
        el.id = "item" + pizzaID;
        el.innerHTML = `
        <h3>${i.name}</h3>
        <img src="src/img/${i.name + pizzaID}.jpg" alt="pizza" class="itemimg">
        <div class="itemFooter">
            <button>
                <h3>Buy</h3>
            </button>
            <button id="cart${+pizzaID}">
                <img src="src/img/add+to+cart.png" alt="add to cart" class="itemFooterimg">
            </button>
        </div>
        `;
        pizzaID++;
        container.append(el);
    }
}
const createCustomePizza = () => {
    const container = document.getElementById("pizzaForm");
    customPizzaPrice = 0;
    //
    custIngr(pizTipBlat, container);
    custIngr(pizFormBlat, container);
    custIngr(pizType, container);
    custIngr(pizSize, container);
    //
    customPizzaPrice = 0;
    let price = document.createElement("p");
    price.innerHTML = `${customPizzaPrice}$`
    let button = document.createElement("button");
    button.id = "order"
    button.innerHTML = `
    Order
    `;
    container.append(price, button)
    customPizza.push()
}
const moveToCart = (item) => {

}
const custIngr = (list, container) => {
    id = 1;
    for(const i of list) //spawn elements from DB of pizzas for blat style
    {
        let el = document.createElement("ul");
        //el.className ="";
        el.id = "pizzaLi" + id;
        el.innerHTML = `
        <li style="">
            <div class="">
                <label for="${i.name + id}">${i.name}</label>
                <input type="radio" id="${i.name + id}" name="tipul_blat" value="${i.name}">
                ${i.price}$
            </div>
        </li>
        `;
        id++;
        container.append(el);
    }
    container.append(document.createElement("br"))//space betwen choses
}