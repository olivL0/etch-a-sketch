const container = document.getElementById("container");
const btn = document.querySelector("#btn");
const userInput = document.getElementById("quantity");

function createGrid() {
    for(i = 0; i < 16; i++) {
        for(j = 0; j < 16; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            gridItem.addEventListener("mouseenter", function() {
                gridItem.classList.add("colour");
            })

            gridItem.style.left = j * 100 + "px";
            gridItem.style.top = i * 100 + "px";

            container.appendChild(gridItem);
        }
    }
}

function updateGrid() {
    container.innerHTML = "";
    for(let i = 0; i < userInput.value; i++) {
        for(j = 0; j < userInput.value; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            gridItem.addEventListener("mouseenter", function() {
                gridItem.classList.add("colour");
            })

            gridItem.style.left = j * 100 + "px";
            gridItem.style.top = i * 100 + "px";

            container.appendChild(gridItem);
        }
    }
    console.log(userInput.value);
}

userInput.addEventListener("keypress", function (e) {
    if(e.key === "Enter") {
        updateGrid();
    }
});

btn.addEventListener("click", function() {
    container.innerHTML = "";
    userInput.value = "";
    createGrid();
});

createGrid();