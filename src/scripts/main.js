let pizzaList = [
    {name: "peperoni", price: 80, pid: 0},
    {name: "pasta", price: 85, pid: 0},
    {name: "capricioasa", price: 80, pid: 0},
    {name: "bento", price: 90, pid: 0},
    {name: "taraneasca", price: 100, pid: 0},
    {name: "dio", price: 130, pid: 0},
    {name: "abdul", price: 60, pid: 0},
    {name: "monako", price: 750, pid: 0}
];
let pizTipBlat = [
    {name: "gros", price: 20},
    {name: "subtire", price: 15}
];

let pizFormBlat = [
    {name: "rotundă", price: 25},
    {name: "ovală", price: 20}
]
let pizType = [
    {name: "Capriciossa", price: 25},
    {name: "Rancho ", price: 20}
];
let pizSize = [
    {name: "mini", price: 20},
    {name: "normală ", price: 30},
    {name: "maxi ", price: 40}
];
let customPizza = [{}];
let cart = [];//===================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
    loadContent();
    //createCustomePizza();
    document.getElementById("customeButton").addEventListener("click", () =>{ //temp
        createCustomePizza();
    });
    //add to cart
    let items = document.getElementsByClassName("addToCartDBPizza");

})
isClear = true;//to fix dublicates of ingridience on second opening of custum
let pizzaID = 1;
const loadContent = () => {
    const container = document.getElementById("container");
    for (const i of pizzaList) //spawn elements from DB of pizzas
    {
        let el = document.createElement("div");
        el.className = "item";
        el.id = "item" + pizzaID;
        i.pid = pizzaID;
        el.innerHTML = `
        <h3>${i.name}</h3>
        <img src="src/img/${i.name + pizzaID}.jpg" alt="pizza" class="itemimg">
        <div class="itemFooter">
            <button>
                <h3>Buy</h3>
            </button>
            <button id="cart${+pizzaID}" class="addToCartDBPizza">
                <img src="src/img/add+to+cart.png" alt="add to cart" class="itemFooterimg">
            </button>
        </div>
        `;
        pizzaID++;
        container.append(el);
    }
}
const createCustomePizza = () => {
    document.getElementById("pizzaForm").style.display = "block";
    if (isClear){
        const container = document.getElementById("pizzaUl");
        //
        ingredient(pizTipBlat, container);
        ingredient(pizFormBlat, container);
        ingredient(pizType, container);
        ingredient(pizSize, container);
        //
        //===============================================================================
        let customPizzaPrice = 0;
        let price = document.createElement("p");
        //calculate the final price of cust pizza
        const priceList = container.getElementsByClassName("inpColection");
        price.innerHTML = `0 $`//initialise with 0
        container.addEventListener("change", () => {
            customPizzaPrice = 0;
            for (let inp of priceList) {
                if (inp.checked) {
                    customPizzaPrice += +inp.value;
                }
            }
            price.innerHTML = `${customPizzaPrice} $`//final price of custom pizza
        });

        //===============================================================================
        let button = document.createElement("button");
        let buttonclose = document.createElement("button");
        button.id = "orderCustPizzaButton";
        buttonclose.id = "cancelCrderCustPizzaButton";
        button.innerHTML = `Order`;
        buttonclose.innerHTML = `Cancel`;

        container.append(price, button, buttonclose)

        //moveToCart(pizzaCust);
    }
    document.getElementById("cancelCrderCustPizzaButton").addEventListener("click",() =>{
        document.getElementById("pizzaForm").style.display = "none";
    });
    document.getElementById("orderCustPizzaButton").addEventListener("click",() =>{
        moveToCart({});//===================================================================================================================
        document.getElementById("pizzaForm").style.display = "none";

    });
    isClear = false;
}

const moveToCart = (itemID) => { //===================================================================================================================
    if (itemID == Number){
        cart.push(itemID);
    }else{
        customPizza.push({itemID})
    }
}


let type = 0;
const ingredient = (list, container) => {
    id = 1;
    for (const i of list) //spawn elements from DB of pizzas for blat style
    {
        let el = document.createElement("li");
        el.id = "pizzaLi" + id;
        el.innerHTML = `
            <div class="">
                <label class="form-check-label" for="${i.name + id}">${i.name}</label>
                <input class="form-check-input inpColection" type="radio" id="${i.name + id}" name="${type}" value="${i.price}">
                ${i.price}$
            </div>
        `;
        id++;
        container.append(el);
    }
    type++;
    container.append(document.createElement("br"))//space betwen choses
}


//
/*
const loadContentV2 = () => {
    const container = document.getElementById("containerV2");
    for (const i of pizzaList) //spawn elements from DB of pizzas
    {
        let el = document.createElement("div");
        el.className = "item";
        el.id = "pizzaID" + pizzaID;
        el.innerHTML = `
         <div class="card">
            <img class="card-img-top" src="src/img/${i.name + pizzaID}.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${i.name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary btn-lg btn-block">Add to cart</button>
            </div>
         </div>
        `;
        pizzaID++;
        container.append(el);
    }
}
const createCustomePizzaV2 = () => {
    const container = document.getElementById("pizzaUl");
    //
    custIngrV2(pizTipBlat, container);
    custIngrV2(pizFormBlat, container);
    custIngrV2(pizType, container);
    custIngrV2(pizSize, container);
    //
    //===============================================================================
    let customPizzaPrice = 0;
    let price = document.createElement("p");
    //calculate the final price of cust pizza
    const priceList = container.getElementsByClassName("inpColection");
    price.innerHTML = `0 $`//initialise with 0
    container.addEventListener("change", () => {
        customPizzaPrice = 0;
        for (let inp of priceList) {
            if (inp.checked) {
                customPizzaPrice += +inp.value;
            }
        }
        price.innerHTML = `${customPizzaPrice} $`//final price of custom pizza
    });

    //===============================================================================
    let button = document.createElement("button");
    button.id = "order"
    button.innerHTML = `Order`;

    container.append(price, button)
    customPizza.push()
}
const custIngrV2 = (list, container) => {
    id = 1;
    for (const i of list) //spawn elements from DB of pizzas for blat style
    {
        let el = document.createElement("li");
        el.id = "pizzaLi" + id;
        el.innerHTML = `
        
            <div class="">
                <label class="form-check-label" for="${i.name + id}">${i.name}</label>
                <input class="form-check-input inpColection" type="radio" id="${i.name + id}" name="${type}" value="${i.price}">
                ${i.price}$
            </div>

        `;
        id++;
        container.append(el);
    }
    type++;
    container.append(document.createElement("br"))//space betwen choses

}
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})*/
