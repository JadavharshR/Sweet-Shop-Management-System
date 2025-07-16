function addSweet(sweets, sweet) {
  sweets.push(sweet);
}

function deleteSweet(sweets, index) {
  sweets.splice(index, 1);
}

function purchaseSweet(sweets, index) {
  if (sweets[index].quantity > 0) {
    sweets[index].quantity -= 1;
    return true;
  }
  return false;
}

function restoreSweet(sweets, index, amount) {
  if (amount > 0) {
    sweets[index].quantity += amount;
    return true;
  }
  return false;
}

function searchSweets(sweets, name = "", category = "", minPrice = 0, maxPrice = Infinity) {
  const lowerName = name.toLowerCase();
  const lowerCategory = category.toLowerCase();

  return sweets.filter(s =>
    (lowerName === "" || s.name.toLowerCase().includes(lowerName)) &&
    (lowerCategory === "" || s.category.toLowerCase().includes(lowerCategory)) &&
    s.price >= minPrice && s.price <= maxPrice
  );
}

module.exports = { addSweet, deleteSweet, purchaseSweet, restoreSweet, searchSweets };
