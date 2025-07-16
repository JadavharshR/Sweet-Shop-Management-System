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




module.exports = { addSweet, deleteSweet , searchSweets };
