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
    //-----------------------------------------------------------------------------
    // let price = document.getElementById("final_price").innerText;
    // let list = document.addEventListener("change", () => {
    //     let temp = document.getElementById("options");
    //     let temp2 = temp.getElementsByTagName("li").namedItem();
    //     console.log(temp1);
    //     console.log(temp2);
    //     //price =
    // });
    //console.log(price)
    //let inputs = document.querySelectorAll('input[name]');

    let price = 0;
    let priceCash = [];
    refresh()
    document.addEventListener("input", () => {
        console.clear();
        refresh()
    });
    //console.log(price);

});

refresh = () => {
    document.querySelectorAll("input[name]:checked").forEach(elem => {
        priceCash.push(elem.value)
        //price += +elem.value;
        console.log(elem.value)
    });
}