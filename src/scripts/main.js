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

document.addEventListener("DOMContentLoaded", () => {
loadContent();

});
const loadContent = () => {
    const container = document.getElementById("container");
    let id = 1;
    for(const i of pizzaList)
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
            <button>
                <img src="src/img/add+to+cart.png" alt="add to cart" class="itemFooterimg">
            </button>
        </div>
    `;
        id++;
        container.append(el);
    }
}