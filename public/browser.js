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
