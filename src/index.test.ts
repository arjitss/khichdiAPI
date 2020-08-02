import a from './index';

/**
 * This is an example test function.
 *
 * @remarks
 * This test method covers the methods written in index.ts.
 *
 */

describe('Test Framework', () => {
  test('Sample Test', () => {
    // Arrange
    const x = 2;
    const y = 3;
    // Act
    const z = a(x, y);
    // Assert
    expect(z).toBe(5);
    expect(z).toMatchSnapshot();
  });
});
