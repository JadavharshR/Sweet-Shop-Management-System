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

test('Search Sweet by Name or Category', () => {
    sweets = [
      { id: '1', name: 'Ladoo', category: 'Round', price: 10, quantity: 5 },
      { id: '2', name: 'Barfi', category: 'Square', price: 20, quantity: 2 }
    ];
    const result = searchSweets(sweets, 'round');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Ladoo');
  });
  
});
