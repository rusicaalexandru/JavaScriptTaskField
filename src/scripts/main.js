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
let tipBlat = [
    {name:"gros",price:20},
    {name:"subtire",price:15}
];

document.addEventListener("DOMContentLoaded", () => {
    loadContent();
    createCustomePizza();
    /*document.getElementById("customeButton").addEventListener("click", () =>{ //temp
        createCustomePizza();
    });*/
})
const loadContent = () => {
    const container = document.getElementById("container");
    let id = 1; //ussed to num the id of the elements
    for(const i of pizzaList) //spawn elements from DB of pizzas
    {
        let el = document.createElement("div");
        el.className ="item";
        el.id = "item" + id;
        el.innerHTML = `
        <h3>${i.name}</h3>
        <img src="src/img/${i.name + id}.jpg" alt="pizza" class="itemimg">
        <div class="itemFooter">
            <button>
                <h3>Buy</h3>
            </button>
            <button id="cart${+id}">
                <img src="src/img/add+to+cart.png" alt="add to cart" class="itemFooterimg">
            </button>
        </div>
    `;
        id++;
        container.append(el);
    }
}
const createCustomePizza = () => {
    const container = document.getElementById("pizzaForm");
    let id = 1; //ussed to num the id of the elements
    container.append(document.createElement("ul"));
    for(const i of tipBlat) //spawn elements from DB of pizzas
    {
        let el = document.createElement("li");
        //el.className ="item";
        el.id = "item" + id;
        el.innerHTML =`hi`;

        id++;
        container.append(el);
    }

}
const moveToCart = (item) => {

}