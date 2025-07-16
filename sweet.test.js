const { addSweet, deleteSweet, searchSweets } = require('./logic');

describe('Sweet Shop Logic Tests', () => {
  let sweets;

  beforeEach(() => {
    sweets = [];
  });

  test('Add Sweet', () => {
    const sweet = { id: 'T001', name: 'Test Barfi', category: 'Test', price: 123, quantity: 3 };
    addSweet(sweets, sweet);
    expect(sweets.length).toBe(1);
    expect(sweets[0].id).toBe('T001');
  });

  test('Delete Sweet', () => {
    sweets = [{ id: 'T001', name: 'Test Barfi', category: 'Test', price: 123, quantity: 3 }];
    deleteSweet(sweets, 0);
    expect(sweets.length).toBe(0);
  });

  
});
