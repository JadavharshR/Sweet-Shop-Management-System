let sweets = [
  { id: "S001", name: "Kaju Katli", category: "Diamond", price: 250, quantity: 20 },
  { id: "S002", name: "Gulab Jamun", category: "Round", price: 150, quantity: 30 },
  { id: "S003", name: "Rasgulla", category: "Syrupy", price: 180, quantity: 25 },
  { id: "S004", name: "Soan Papdi", category: "Flaky", price: 120, quantity: 15 },
  { id: "S005", name: "Mysore Pak", category: "Soft", price: 200, quantity: 10 },
  { id: "S006", name: "Milk Cake", category: "Dense", price: 220, quantity: 18 },
  { id: "S007", name: "Besan Ladoo", category: "Round", price: 130, quantity: 22 },
  { id: "S008", name: "Jalebi", category: "Spiral", price: 100, quantity: 40 },
  { id: "S009", name: "Kalakand", category: "Crumbly", price: 190, quantity: 14 },
  { id: "S010", name: "Peda", category: "Traditional", price: 160, quantity: 27 }
];

function renderCards(filteredSweets = sweets) {
  const container = document.querySelector("#sweetCards");
  container.innerHTML = "";

  if (filteredSweets.length === 0) {
    container.innerHTML = `<p>No sweets available.</p>`;
    return;
  }

  filteredSweets.forEach((sweet, index) => {
    const card = document.createElement("div");
    card.className = "sweet-card";

   card.innerHTML = `
  <h3>${sweet.name}</h3>
  <p><strong>Category:</strong> ${sweet.category}</p>
  <p><strong>Price:</strong> ₹${sweet.price}</p>
  <p><strong>Qty:</strong> ${sweet.quantity}</p>
  <div class="card-buttons">
    <button onclick="purchaseSweet(${index})">Purchase</button>
    <button onclick="restoreSweet(${index})">Restore</button>
    <button onclick="deleteSweet(${index})">Delete</button>
  </div>
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

  sweets.push({ id, name, category, price, quantity });
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

function restoreSweet(index) {
  const amount = prompt("Enter quantity to restore:");
  const num = parseInt(amount);
  if (!isNaN(num) && num > 0) {
    sweets[index].quantity += num;
    renderCards();
  } else {
    alert("Invalid quantity!");
  }
}

function applyFilters() {
  const name = document.getElementById("searchName").value.toLowerCase();
  const category = document.getElementById("searchCategory").value.toLowerCase();
  const minPrice = parseFloat(document.getElementById("minPrice").value);
  const maxPrice = parseFloat(document.getElementById("maxPrice").value);

  const filtered = sweets.filter(sweet => {
    const matchName = name === "" || sweet.name.toLowerCase().includes(name);
    const matchCategory = category === "" || sweet.category.toLowerCase().includes(category);
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
renderCards();
