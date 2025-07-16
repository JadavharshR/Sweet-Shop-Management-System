let sweets = [
  { id: "S001", name: "Kaju Katli", category: "Diamond", price: 250, quantity: 20 },
  { id: "S002", name: "Gulab Jamun", category: "Round", price: 150, quantity: 30 },
  { id: "S003", name: "Rasgulla", category: "Syrupy", price: 180, quantity: 25 },
];

function renderTable(filteredSweets = sweets) {
  const tbody = document.querySelector("#sweetTable tbody");
  tbody.innerHTML = "";

  if (filteredSweets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6">No such sweet available in the shop.</td></tr>`;
    return;
  }

  filteredSweets.forEach((sweet, index) => {
    const row = `<tr>
      <td>${sweet.id}</td>
      <td>${sweet.name}</td>
      <td>${sweet.category}</td>
      <td>${sweet.price}</td>
      <td>${sweet.quantity}</td>
      <td>
        <button onclick="purchaseSweet(${index})">Purchase</button>
        <button onclick="deleteSweet(${index})">Delete</button>
      </td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function addSweet(e) {
  e.preventDefault();

  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  const sweet = { id, name, category, price, quantity };
  sweets.push(sweet);
  renderTable();
  document.getElementById("sweetForm").reset();
}

function deleteSweet(index) {
  if (confirm("Are you sure you want to delete this sweet?")) {
    sweets.splice(index, 1);
    renderTable();
  }
}

function purchaseSweet(index) {
  if (sweets[index].quantity > 0) {
    sweets[index].quantity -= 1;
    renderTable();
  } else {
    alert("This sweet is out of stock!");
  }
}

function applyFilters() {
  const name = document.getElementById("searchName").value.toLowerCase();
  const category = document.getElementById("searchCategory").value.toLowerCase();
  const minPrice = parseFloat(document.getElementById("minPrice").value);
  const maxPrice = parseFloat(document.getElementById("maxPrice").value);

  const filtered = sweets.filter((sweet) => {
    const matchName = name === "" || sweet.name.toLowerCase().includes(name);
    const matchCategory = category === "" || sweet.category.toLowerCase().includes(category);
    const matchPrice =
      (isNaN(minPrice) || sweet.price >= minPrice) &&
      (isNaN(maxPrice) || sweet.price <= maxPrice);

    return matchName && matchCategory && matchPrice;
  });

  renderTable(filtered);
}

function resetFilters() {
  document.getElementById("searchName").value = "";
  document.getElementById("searchCategory").value = "";
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  renderTable();
}

document.getElementById("sweetForm").addEventListener("submit", addSweet);

// Initial table rendering
renderTable();
