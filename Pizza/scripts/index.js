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
    price = document.getElementById("final_price").innerText;
    console.log(price)


    
});

