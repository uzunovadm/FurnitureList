const textArea = document.getElementById("textArea");
const generateBtn = document.getElementById("generateBtn");
const buyBtn = document.getElementById("buyBtn");
const tbody = document.getElementById("tbody");
const output = document.querySelector("#buySection");

generateBtn.addEventListener("click", generate);
buyBtn.addEventListener("click", buyFurniture);

function generate() {
  const furniture = JSON.parse(textArea.value);
  generateTable(furniture);
}

function buyFurniture() {
  const checkedFurniture = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  )
    .map((box) => box.parentElement.parentElement)
    .map((furniture) => ({
      name: furniture.children[1].textContent,
      price: furniture.children[2].textContent,
    }));

  let totalPrice = 0;
  const names = [];

  checkedFurniture.forEach((el) => {
    totalPrice += Number(el.price);
    names.push(el.name);
  });

  const result = `Bought furniture: ${names.join(" ,")}
Total price: ${totalPrice.toFixed(2)}`;

  output.value = result;
}

function generateTable(data) {
  data.forEach((el) => {
    const row = document.createElement("tr");

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = el.img;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    const name = document.createElement("p");
    name.textContent = el.name;
    nameCell.appendChild(name);
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    const price = document.createElement("p");
    price.textContent = el.price;
    priceCell.appendChild(price);
    row.appendChild(priceCell);

    const checkboxCell = document.createElement("td");
    const check = document.createElement("input");
    check.type = "checkbox";
    checkboxCell.appendChild(check);
    row.appendChild(checkboxCell);

    tbody.appendChild(row);

    textArea.value = "";
  });

  //   const tr = document.createElement("tr");

  //   const element = obj
  //     .map((el) => {
  //       return `
  //         <td><img src='${el.img}'></td>
  //         <td><p>${el.name}</p></td>
  //         <td><p>${el.price}</p></td>
  //         <td><input type="checkbox"></td>
  //         `;
  //     })
  //     .join("");

  //   tr.innerHTML = element;
  //   tbody.appendChild(tr);
  //   textArea.value = "";
}
