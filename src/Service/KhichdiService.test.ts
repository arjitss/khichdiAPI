import { getMeTheOptionsAsync, addFoodOptionsAsync } from './KhichdiService';
// @ts-ignore
import KhichdiRepository from '../DAL/KhichdiRepository';

jest.mock('../DAL/KhichdiRepository');

describe('Khichdi Service Layer Test Cases: ', () => {
  beforeEach(() => {
    (KhichdiRepository.getMeTheOptionsFromRepoAsync as jest.Mock).mockClear();
  });

  test(' - Get Me the Options: Success', async () => {
    // Arrange

    const searchArray = ['Potatoes', 'Cabbage'];
    const expectedData = {
      data: [
        {
          _id: '5f33beb4f558afa75a80f17d',
          name: 'Aaloo Patta Gobhi',
          Cuisine: 'Indian',
          Likes: 156,
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          keyIngrediants: ['Potatoes', 'Cabbage'],
          typeofFood: 'SideDish'
        }
      ]
    };

    const returnData = await getMeTheOptionsAsync(searchArray);
    // Assert
    expect(returnData).toMatchObject(expectedData);
  });

  test('', async () => {
    // Arrange
    const searchArray = [];
    const expectedData = {
      matchedCount: 1,
      modifiedCount: 2,
      upsertedCount: 3
    };
    // Act
    const returnData = await addFoodOptionsAsync(searchArray);
    // assert
    expect(returnData).toMatchObject(expectedData);
  });
});
