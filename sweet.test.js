const {
  addSweet,
  deleteSweet,
  purchaseSweet,
  restoreSweet,
  searchSweets
} = require('./logic');

describe("Sweet Shop Logic Tests", () => {
  let sweets;

  beforeEach(() => {
    sweets = [
      { id: "1", name: "Ladoo", category: "Round", price: 10, quantity: 5 },
      { id: "2", name: "Barfi", category: "Square", price: 20, quantity: 3 },
      { id: "3", name: "Jalebi", category: "Spiral", price: 15, quantity: 0 }
    ];
  });

  test("Add Sweet", () => {
    addSweet(sweets, { id: "4", name: "Halwa", category: "Soft", price: 25, quantity: 4 });
    expect(sweets.length).toBe(4);
  });

  test("Delete Sweet", () => {
    deleteSweet(sweets, 1);
    expect(sweets.length).toBe(2);
    expect(sweets[1].name).toBe("Jalebi");
  });

  test("Purchase Sweet", () => {
    const result = purchaseSweet(sweets, 0);
    expect(result).toBe(true);
    expect(sweets[0].quantity).toBe(4);
  });

  test("Fail Purchase when out of stock", () => {
    const result = purchaseSweet(sweets, 2);
    expect(result).toBe(false);
  });

  test("Restore Sweet", () => {
    const result = restoreSweet(sweets, 1, 5);
    expect(result).toBe(true);
    expect(sweets[1].quantity).toBe(8);
  });

  test("Search Sweet by Name", () => {
    const result = searchSweets(sweets, "ladoo", "", 0, Infinity);
    expect(result.length).toBe(1);
  });
});
