const priceList = [
    {
        name: "Mario",
        form: {
            rotunda: 0,
            ovala: 0
        },
        type: {
            subtire: 0,
            gros: 5,
        },
        size: {
            mica: 20,
            mare: 40
        }
    },
    {
        name: "Rancho",
        form: {
            rotunda: 0,
            ovala: 0
        },
        type: {
            subtire: 0,
            gros: 5,
        },
        size: {
            mica: 20,
            mediu: 30,
        }
    }
]
const adaugatoare = {
    Cascavaldublu: {
        name: "Cascaval dublu",
        price: 10
    },
    Piperadaugator: {
        name: "Piperad augator",
        price: 2
    },
    lamiadaugator: {
        name: "lami adaugator",
        price: 3
    },
    Ciuperciadaugatoare: {
        name: "Ciuperci adaugatoare",
        price: 6
    }
}
let totalPrice;

const loadPizzas = () => {
    const selectPizza = document.getElementById('pizza-select');
    const ingredience = document.getElementById('ingredience');
    ingredience.style.display = 'none';
    selectPizza.innerHTML = `<option value="" selected disabled>Select pizza</option>`

    for (let i = 0; i < priceList.length; i++) {
        selectPizza.innerHTML += `<option value="${i}">${priceList[i].name}</option>`
    }

    selectPizza.addEventListener('change', (e) => {
        if (!e.target.value) return;
        showConfig(e.target.value)
        console.log(e.target.value)
    })
}

const showConfig = (selected) => {
    if (!selected) return;

    document.getElementById('ingredience').style.display = 'block';
    const pizza = priceList[selected]
    const tipulDeBlat = document.getElementById('tipul_de_blat');
    const forma_Blatului = document.getElementById('forma_Blatului');
    const marimea = document.getElementById('marimea');
    const aditionalIngredience = document.getElementById('aditionalIngredience');
    tipulDeBlat.innerHTML = '';
    forma_Blatului.innerHTML = '';
    marimea.innerHTML = '';
    aditionalIngredience.innerHTML = '';

    for (const typeBlat of Object.keys(pizza.type)) {
        tipulDeBlat.innerHTML +=
            `<li>
                <input type="radio" name="tip_blat" value="${pizza.type[typeBlat]}" id="${typeBlat}">
                <label for="${typeBlat}">${typeBlat}</label>
            </li>`
    }

    for (const formaBlat of Object.keys(pizza.form)) {
        forma_Blatului.innerHTML +=
            `<li>
                <input type="radio" name="forma_blat" value="${pizza.form[formaBlat]}" id="${formaBlat}">
                <label for="${formaBlat}">${formaBlat}</label>
            </li>`
        calculatePrice()
    }

    for (const marimeaBlat of Object.keys(pizza.size)) {
        marimea.innerHTML +=
            `<li>
                <input type="radio" name="size_pizza" value="${pizza.size[marimeaBlat]}" id="${marimeaBlat}">
                <label for="${marimeaBlat}">${marimeaBlat}</label>
            </li>`
    }

    for (const ingridient of Object.keys(adaugatoare)) {
        aditionalIngredience.innerHTML +=
            `<li class="aditionalIngredience">
                <input type="checkbox" name="adaugator" value="${adaugatoare[ingridient].price}" id="${adaugatoare[ingridient].name}">
                <label for="${adaugatoare[ingridient].name}">${adaugatoare[ingridient].name}</label>
            </li>`
    }

    aditionalIngredience.addEventListener('change', () => {
        calculatePrice()
    })
    marimea.addEventListener('change', () => {
        calculatePrice()
    })
    forma_Blatului.addEventListener('change', () => {
        calculatePrice()
    })
    tipulDeBlat.addEventListener('change', () => {
        calculatePrice()
    })
}

const calculatePrice = () => {
    totalPrice = 0;
    console.clear();
    document.querySelectorAll("input[name]:checked").forEach(elem => {
        totalPrice += +elem.value;
        console.log(elem.value)
        console.log("Price" + totalPrice)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadPizzas();
});

    /*//----------------------------------------------------------------------------- Show aditional options
    let checkBox = document.getElementById("adaugator");
    checkBox.addEventListener("change", () =>{
        let text = document.getElementById("aditionalIngredience");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    });
    //----------------------------------------------------------------------------- Calculate price
    let price = 0;
    let discount = 0; //discount value
    let codPromotional = 0; //basicly just - final price
    let finalPrice = 0;
    refreshPrice = () => { //function to calculate final price
        price = 0;
        document.querySelectorAll("input[name]:checked").forEach(elem => {
            price += +elem.value;
            console.log(elem.value)
        });
        console.log("Final Price +promotional will be : " + (price - codPromotional));
        console.log("Final Price +promotional will be (DISCOUNT) : " + (price - codPromotional) * (1 - discount / 100)); //Calculate price / discount (%)
        document.getElementById("final_price").innerText = (price - codPromotional) * (1 - discount / 100) + "$";
        document.getElementById("discount_%").innerText = discount + "% Discount";
    };
    refreshPrice() //on page load show default ingredients pizza price
    document.addEventListener("input", () => {
        console.clear();
        refreshPrice();
    });
    //-----------------------------------------------------------------------------

});
let totalPizzaList = [];
const addPizza = () => {

};*/

//{
//  "posts": [
//    { "id": 1, "title": "json-server", "author": "typicode" }
//  ],
//  "comments": [
//    { "id": 1, "body": "some comment", "postId": 1 }
//  ],
//  "profile": { "name": "typicode" }
//}