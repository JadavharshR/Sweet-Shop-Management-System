const {
  addSweet,
  deleteSweet,
  searchSweets,
  purchaseSweet
} = require('./logic');

describe('Sweet Shop Logic', () => {
  let sweets;

  beforeEach(() => {
    sweets = [
      { id: "1", name: "Ladoo", category: "Round", price: 10, quantity: 5 },
      { id: "2", name: "Barfi", category: "Square", price: 20, quantity: 3 },
      { id: "3", name: "Jalebi", category: "Spiral", price: 15, quantity: 0 }
    ];
  });

  test('Add sweet', () => {
    const newSweet = { id: "4", name: "Halwa", category: "Soft", price: 25, quantity: 4 };
    addSweet(sweets, newSweet);
    expect(sweets.length).toBe(4);
    expect(sweets[3].name).toBe("Halwa");
  });

  test('Delete sweet', () => {
    deleteSweet(sweets, 1);
    expect(sweets.length).toBe(2);
    expect(sweets[1].name).toBe("Jalebi");
  });

  test('Search sweet by name and category', () => {
    const result = searchSweets(sweets, "barfi", "square");
    expect(result.length).toBe(1);
    expect(result[0].id).toBe("2");
  });

  test('Search sweet by price range', () => {
    const result = searchSweets(sweets, "", "", 10, 15);
    expect(result.length).toBe(2); // Ladoo and Jalebi
  });

  test('Purchase sweet success', () => {
    const result = purchaseSweet(sweets, 0);
    expect(result).toBe(true);
    expect(sweets[0].quantity).toBe(4);
  });

  test('Purchase sweet fails when out of stock', () => {
    const result = purchaseSweet(sweets, 2);
    expect(result).toBe(false);
    expect(sweets[2].quantity).toBe(0);
  });
});
