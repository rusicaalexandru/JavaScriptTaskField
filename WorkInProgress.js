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
    let iter = 0;
    setInterval(() => {
        if (iter <= 20) {
            const node = document.createElement("LI");
            const textnode = document.createTextNode(`${iter}`);
            node.appendChild(textnode);
            document.getElementById("olListId").appendChild(node);
            if(iter % 2 === 0) {
                node.style.backgroundColor = "green";
            } else {
                node.style.backgroundColor = "purple";
            }
            iter++;
        }
        }, 2000);
    //----------------------------------------------------------------------7.6
    table();
    isNum();
});

//----------------------------------------------------------------------------------------------7.6
const tableBody = document.querySelector('#tableId');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const table = () => {
    letters.forEach((letter, index) => {
        const tr = document.createElement('tr');

        numbers.forEach((number, i) => {
            const td = document.createElement('td');

            if ((index + i) % 2) {
                td.style.backgroundColor = 'darkgrey';
            }

            td.innerHTML = letter + number;
            tr.append(td);
        });

        tableBody.append(tr);
    });
};

//----------------------------------------------------------------------------------------------7.15

const input = document.getElementById('input');

const isNum = () => {
    input.addEventListener('focusout', () => {
        if (!Number(input.value)) {
            input.value = '';
        }
    });
};
