import server from './index';

/**
 * This is an example test function.
 *
 * @remarks
 * This test method covers the methods written in index.ts.
 *
 */

jest.mock('express', () => {
  const mockedExpress = () => {
    return {
      get: jest.fn(),
      use: jest.fn(),
      listen: jest.fn()
    };
  };
});

// TODO: Removed this test file if not required
describe('Function Setup', () => {
  test('Sample Test', () => {
    expect(1).toBe(1);
  });
});
