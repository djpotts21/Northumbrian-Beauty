/**
 * @jest-environment jsdom
 */

// Import the function to test
const { lovelyPlacesNorthumberland, hiddenGemsNorthumberland, stayInNorthumberland } = require('./script.js');

// Test suite for lovelyPlacesNorthumberland
describe('lovelyPlacesNorthumberland', () => {
  test('should contain an array of places', () => {
    expect(lovelyPlacesNorthumberland).toBeInstanceOf(Array);
    expect(lovelyPlacesNorthumberland).toHaveLength(5);
  });

  test('each place should have specific properties', () => {
    lovelyPlacesNorthumberland.forEach(place => {
      expect(place).toHaveProperty('position');
      expect(place).toHaveProperty('title');
      expect(place).toHaveProperty('website');
      expect(place).toHaveProperty('blurb');
      expect(place).toHaveProperty('image');
    });
  });
});

// Test suite for hiddenGemsNorthumberland
describe('hiddenGemsNorthumberland', () => {
  test('should contain an array of hidden gems', () => {
    expect(hiddenGemsNorthumberland).toBeInstanceOf(Array);
    expect(hiddenGemsNorthumberland).toHaveLength(5);
  });

  test('each hidden gem should have specific properties', () => {
    hiddenGemsNorthumberland.forEach(gem => {
      expect(gem).toHaveProperty('position');
      expect(gem).toHaveProperty('title');
      expect(gem).toHaveProperty('website');
      expect(gem).toHaveProperty('blurb');
      expect(gem).toHaveProperty('image');
    });
  });
});

// Test suite for stayInNorthumberland
describe('stayInNorthumberland', () => {
  test('should contain an array of places to stay', () => {
    expect(stayInNorthumberland).toBeInstanceOf(Array);
    expect(stayInNorthumberland).toHaveLength(5); 
  });

  test('each place to stay should have specific properties', () => {
    stayInNorthumberland.forEach(place => {
      expect(place).toHaveProperty('position');
      expect(place).toHaveProperty('title');
      expect(place).toHaveProperty('website');
    });
  });
});