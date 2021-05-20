document.addEventListener("DOMContentLoaded", () => {

});
const container = document.getElementById("container");
for( let i=1;i <=5; i++)
{
    let el = document.createElement("div");
    el.className ="item";
    el.id = "card" + i;
    el.innerHTML = `
        <img src="src/img/${i}.jpg" alt="pizza" class="itemimg">
        <div class="itemFooter">
            <button>Buy</button>
            <button>
                <img src="src/img/add+to+cart.png" alt="add to cart" class="itemFooterimg">
            </button>
            </div>
    `;
    container.append(el);
}