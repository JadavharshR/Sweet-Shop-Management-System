let sweets = [];
let filteredSweets = null;

function renderTable(filteredSweets = sweets) {
  const tbody = document.querySelector("#sweetTable tbody");
  tbody.innerHTML = "";

  if (filteredSweets.length === 0) {
    const row = `<tr><td colspan="6">No such sweet available in the shop.</td></tr>`;
    tbody.innerHTML = row;
    return;
  }

  filteredSweets.forEach((sweet, index) => {
    const row = `<tr>
      <td>${sweet.id}</td>
      <td>${sweet.name}</td>
      <td>${sweet.category}</td>
      <td>${sweet.price}</td>
      <td>${sweet.quantity}</td>
      <td><button onclick="deleteSweet(${index})">Delete</button></td>
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
  document.getElementById("searchInput").value = ""; // Clear search
}

function deleteSweet(index) {
  if (confirm("Are you sure you want to delete this sweet?")) {
    sweets.splice(index, 1);
    renderTable();
  }
}

document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  const filtered = sweets.filter(
    (sweet) =>
      sweet.name.toLowerCase().includes(searchTerm) ||
      sweet.category.toLowerCase().includes(searchTerm)
  );

  renderTable(filtered);
});


document.getElementById("sweetForm").addEventListener("submit", addSweet);


