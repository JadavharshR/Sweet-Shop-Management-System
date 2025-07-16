function addSweet(sweets, sweet) {
  sweets.push(sweet);
}

function deleteSweet(sweets, index) {
  sweets.splice(index, 1);
}

function searchSweets(sweets, name = "", category = "", minPrice = 0, maxPrice = Infinity) {
  const lowerName = name.toLowerCase();
  const lowerCategory = category.toLowerCase();

  return sweets.filter(s => {
    const matchesName = lowerName === "" || s.name.toLowerCase().includes(lowerName);
    const matchesCategory = lowerCategory === "" || s.category.toLowerCase().includes(lowerCategory);
    const matchesPrice = s.price >= minPrice && s.price <= maxPrice;
    return matchesName && matchesCategory && matchesPrice;
  });
}

function purchaseSweet(sweets, index) {
  if (sweets[index].quantity > 0) {
    sweets[index].quantity -= 1;
    return true; // success
  } else {
    return false; // out of stock
  }
}

module.exports = {
  addSweet,
  deleteSweet,
  searchSweets,
  purchaseSweet
};
