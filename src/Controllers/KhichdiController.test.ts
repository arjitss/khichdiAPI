import {
  getMeTheOptionsAsync,
  addFoodOptionsAsync
} from '../Service/KhichdiService';
import { KhichdiController } from './KhichdiController';
import express from 'express';
import supertest from 'supertest';
const app = express();
jest.mock('../Service/KhichdiService');
describe('Khchidi Controllers Test - ', () => {
  test(': Get Endpoint', async () => {
    // Act
    (getMeTheOptionsAsync as jest.Mock).mockImplementation(() => {
      return {
        _id: '5f33beb4f558afa75a80f17d',
        name: 'Aaloo Patta Gobhi',
        Cuisine: 'Indian',
        Likes: 156,
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        keyIngrediants: ['Potatoes', 'Cabbage'],
        typeofFood: 'SideDish'
      };
    });
    KhichdiController(app);
    await supertest(app)
      .get('/api/giveMeOptions?ingrediants=Potatoes')
      .expect(200);
    expect(getMeTheOptionsAsync).toBeCalledTimes(1);

    // Assert
  }),
    test(': Post Endpoint', async () => {
      // Arrange
      const data = {
        fooditems: [
          {
            name: 'Aaloo Patta Gobhi',
            Cuisine: 'Indian',
            Likes: 156,
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            keyIngrediants: ['Potatoes', 'Cabbage'],
            typeofFood: 'SideDish'
          }
        ]
      };
      (addFoodOptionsAsync as jest.Mock).mockImplementation(() => {
        return {
          matchedCount: 1,
          modifiedCount: 1,
          upsertedCount: 0
        };
      });
      // Act
      KhichdiController(app);
      await supertest(app).post('/api/addFoodOptions').send(data).expect(201);
      expect(addFoodOptionsAsync).toBeCalledTimes(1);

      // Assert
    });
});
