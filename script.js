let sweets = [
  { id: "S001", name: "Kesar Kaju Katli", category: "Premium Diamond", price: 280, quantity: 15 },
  { id: "S002", name: "Golden Gulab Jamun", category: "Royal Round", price: 160, quantity: 20 },
  { id: "S003", name: "Bengali Rasgulla", category: "Syrupy Delight", price: 170, quantity: 25 },
  { id: "S004", name: "Chocolate Barfi", category: "Fusion", price: 200, quantity: 18 },
  { id: "S005", name: "Pista Roll", category: "Dry Fruit", price: 220, quantity: 22 },
  { id: "S006", name: "Motichoor Ladoo", category: "Classic", price: 150, quantity: 30 }
];

function renderCards(filteredSweets = sweets) {
  const container = document.getElementById("sweetCards");
  container.innerHTML = "";

  if (filteredSweets.length === 0) {
    container.innerHTML = `<p>No sweets found.</p>`;
    return;
  }

  filteredSweets.forEach((sweet, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${sweet.name}</h3>
      <p><strong>ID:</strong> ${sweet.id}</p>
      <p><strong>Category:</strong> ${sweet.category}</p>
      <p><strong>Price:</strong> ₹${sweet.price}</p>
      <p><strong>Qty:</strong> ${sweet.quantity}</p>
      <button class="purchase" onclick="purchaseSweet(${index})">Purchase</button>
      <button class="delete" onclick="deleteSweet(${index})">Delete</button>
    `;
    container.appendChild(card);
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
  renderCards();
  document.getElementById("sweetForm").reset();
}

function deleteSweet(index) {
  if (confirm("Are you sure you want to delete this sweet?")) {
    sweets.splice(index, 1);
    renderCards();
  }
}

function purchaseSweet(index) {
  if (sweets[index].quantity > 0) {
    sweets[index].quantity -= 1;
    renderCards();
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
    const matchName = !name || sweet.name.toLowerCase().includes(name);
    const matchCategory = !category || sweet.category.toLowerCase().includes(category);
    const matchPrice =
      (isNaN(minPrice) || sweet.price >= minPrice) &&
      (isNaN(maxPrice) || sweet.price <= maxPrice);

    return matchName && matchCategory && matchPrice;
  });

  renderCards(filtered);
}

function resetFilters() {
  document.getElementById("searchName").value = "";
  document.getElementById("searchCategory").value = "";
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  renderCards();
}

document.getElementById("sweetForm").addEventListener("submit", addSweet);

// Initial render
renderCards();
