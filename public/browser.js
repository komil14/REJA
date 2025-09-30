console.log("Browser JS ishlayapti");

function itemTemplate(item) {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="item-text">
            ${item.reja} 
          </span>
          <div class="btn-group">
            <button data-id="${item._id}" class="btn btn-sm btn-outline-secondary edit-me">✏️ O'zgartirish</button>
            <button data-id="${item._id}" class="btn btn-sm btn-outline-danger delete-me">🗑 O'chirish</button>
          </div>
        </li>`;
}


let createField = document.getElementById("create-field");

document.
    getElementById("create-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        axios.post("/create-item", { reja: createField.value })
            .then((response) => {
                document
                    .getElementById("item-list")
                    .insertAdjacentHTML("beforeend",
                        itemTemplate(response.data));
                createField.value = "";
                createField.focus();
            })
            .catch((err) => {
                console.log("Qaytadan urinib ko'ring");
            });
    });

document.addEventListener("click", function (e) {
    // O'chirish
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Rostdan ham o'chirmoqchimisiz?")) {
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((response) => {
                    e.target.parentElement.parentElement.remove();
                })
                .catch(() => {
                    console.log("Qaytadan urinib ko'ring");
                });
        }
    }

    // O'zgartirish
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt(
            "Yangi reja kiriting",
            e.target.parentElement.parentElement.querySelector(".item-text").innerText
        );
        if (userInput) {
            axios
                .post("/update-item", { id: e.target.getAttribute("data-id"), reja: userInput })
                .then(() => {
                    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = `${userInput} <span style="font-style: italic; color: grey;" class="edited-label">(Edited)</span>`;
                })
                .catch(() => {
                    console.log("Qaytadan urinib ko'ring"); 
                });
        }
    }
});

// Hammasini o'chirish
document
    .getElementById("delete-all")
    .addEventListener("click", function (e) {
        if (confirm("Rostdan ham hammasini o'chirmoqchimisiz?")) {
            axios
                .post("/delete-all")
                .then((response) => {
                    document.getElementById("item-list").innerHTML = "";
                })
                .catch(() => {
                    console.log("Qaytadan urinib ko'ring");
                });
        }
    });     


