function addSweet(sweets, sweet) {
  sweets.push(sweet);
}

function deleteSweet(sweets, index) {
  sweets.splice(index, 1);
}

function searchSweets(sweets, term) {
  const lower = term.toLowerCase();
  return sweets.filter(s =>
    s.name.toLowerCase().includes(lower) ||
    s.category.toLowerCase().includes(lower)
  );
}

function purchaseSweet(sweets, index) {
  if (sweets[index].quantity > 0) {
    sweets[index].quantity -= 1;
    return true; // success
  } else {
    return false; // out of stock
  }
}

module.exports = { addSweet, deleteSweet, searchSweets, purchaseSweet };
