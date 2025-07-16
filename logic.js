function addSweet(sweets, sweet) {
  sweets.push(sweet);
}

function deleteSweet(sweets, index) {
  sweets.splice(index, 1);
}



module.exports = { addSweet, deleteSweet };
