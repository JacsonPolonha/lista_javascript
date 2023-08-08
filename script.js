const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener("click", addItem);

function addItem() {
    const newItem = itemInput.value.trim();

    if (newItem !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${newItem} <button class="removeBtn">Remover</button>`;
        itemList.appendChild(li);
        itemInput.value = "";
        const removeBtn = li.querySelector(".removeBtn");
        removeBtn.addEventListener("click", removeItem);
    } else {
        alert ("Digite alguma coisa para adicionar na lista!!!");
    }
}

function removeItem(event) {
    const li = event.target.parentElement;
    itemList.removeChild(li);
}

itemInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        addItem();
    }
});