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
    let discount = 50;
    let codPromotional = 20; // to do - Insert a promotional code
    refreshPrice = () => { //function to calculate final price
        finalPrice = 0;
        document.querySelectorAll("input[name]:checked").forEach(elem => {
            finalPrice += +elem.value;
            console.log(elem.value)
        });
        console.log("Final Price +promotional will be : " + (finalPrice - codPromotional));
        console.log("Final Price +promotional will be (DISCOUNT) : " + (finalPrice - codPromotional) * (1 - discount / 100)); //Calculate price / discount (%)
        document.getElementById("final_price").innerText = finalPrice + "$";
        document.getElementById("discount_%").innerText = discount + "%";
    }
    refreshPrice() //on page load show default ingredients pizza price
    document.addEventListener("input", () => {
        console.clear();
        refreshPrice();
    });
    //-----------------------------------------------------------------------------


});
