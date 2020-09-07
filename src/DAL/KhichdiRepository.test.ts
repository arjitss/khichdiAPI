import KhichdiReporitory from './KhichdiRepository';
//@ts-ignore
import { model, connect } from 'mongoose';

jest.mock('mongoose');

describe('Repository Test Cases', () => {
  beforeEach(() => {
    //@ts-ignore
    model.mockClear();
    //@ts-ignore
    connect.mockClear();
  });
  test('getMeTheOptionsFromRepoAsync - Success', async () => {
    // Arrange
    const requestArray = ['Potatoes', 'Cabbage'];
    //@ts-ignore
    model.mockImplementation(() => {
      return {
        find: jest.fn(() => {
          return {
            lean: jest.fn(async () => {
              return {
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
            })
          };
        })
      };
    });
    // Act
    const res = await KhichdiReporitory.getMeTheOptionsFromRepoAsync(
      requestArray
    );
    // Assert
    expect(res).toMatchSnapshot();
  });

  test('', async () => {
    // arrange
    const foodItem = [];
    //@ts-ignore
    KhichdiReporitory.db = jest.fn(() => {
      return {
        collection: jest.fn()
      };
    });
    //@ts-ignore
    KhichdiReporitory.db.collection = jest.fn(() => {
      return {
        updateOne: jest.fn(() => {
          return {
            matchedCount: 1,
            modifiedCount: 2,
            upsertedCount: 3
          };
        })
      };
    });
    //@ts-ignore
    connect.mockImplementation = jest.fn();
    KhichdiReporitory.connect();
    const res = await KhichdiReporitory.addFoodOptionsFromRepoAsync(foodItem);
    // assert
    expect(res).toMatchSnapshot();
  });
});
