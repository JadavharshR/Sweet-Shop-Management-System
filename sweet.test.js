const { addSweet, deleteSweet, searchSweets, purchaseSweet } = require('./logic');

describe("Sweet Shop Features", () => {
  let sweets;

  beforeEach(() => {
    sweets = [
      { id: 1, name: "Ladoo", category: "Indian", price: 10, quantity: 5 },
      { id: 2, name: "Baklava", category: "Turkish", price: 15, quantity: 2 },
      { id: 3, name: "Donut", category: "American", price: 12, quantity: 10 },
    ];
  });

  test('Search Sweet by Name or Category', () => {
    const result = searchSweets(sweets, 'indian');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Ladoo');
  });

  test('Purchase Sweet - quantity decreases by 1', () => {
    const success = purchaseSweet(sweets, 0); // Ladoo
    expect(success).toBe(true);
    expect(sweets[0].quantity).toBe(4);
  });

  test('Purchase Sweet - should not allow if quantity is 0', () => {
    sweets[1].quantity = 0; // Baklava
    const result = purchaseSweet(sweets, 1);
    expect(result).toBe(false);
    expect(sweets[1].quantity).toBe(0);
  });
});
