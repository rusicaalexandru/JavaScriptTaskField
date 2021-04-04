document.addEventListener("DOMContentLoaded", () => {
    //----------------------------------------------------------------------------- Show aditional options
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
    let finalPrice = 0;
    let priceCash = [];
    refreshPrice = () => { //function to calculate final price
        finalPrice = 0;
        document.querySelectorAll("input[name]:checked").forEach(elem => {
            priceCash.push(elem.value)
            finalPrice += +elem.value;
            console.log(elem.value)
        });
        console.log("Final Price will be : " + finalPrice);
        document.getElementById("final_price").innerText = finalPrice + "$";
    }
    refreshPrice() //on page load show default ingredients pizza price
    document.addEventListener("input", () => {
        console.clear();
        refreshPrice();


    });
    //finalPrice = priceCash.reduce()

});


