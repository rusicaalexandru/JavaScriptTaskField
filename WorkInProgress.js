//----------------------------------------------------------------------7.1
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "crimson";

    //----------------------------------------------------------------------7.2
    setTimeout(() => document.body.style.backgroundColor = "green",3000)

    //----------------------------------------------------------------------7.3
    const buttonElement = document.getElementById("orangeButtonId");
    buttonElement.addEventListener("click", () => {
        document.body.style.backgroundColor = "orange";
    });

    //----------------------------------------------------------------------7.4
    let i = 0;
    for (let i = 1; i <= 20; i++){
        setTimeout(() => {
            const node = document.createElement("LI");
            const textnode = document.createTextNode(`${i}`);
            node.appendChild(textnode);
            const olList = document.getElementById("olListId").appendChild(node);
            if(i % 2 === 0) {
                node.style.backgroundColor = "green";
            } else {
                node.style.backgroundColor = "purple";
            }
            i++;
        }, 2000)
    }
});


