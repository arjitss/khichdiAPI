const mock = {
  getMeTheOptionsFromRepoAsync: jest.fn(() => {
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
  }),
  connect: jest.fn(() => {
    return true;
  }),
  addFoodOptionsFromRepoAsync: jest.fn(() => {
    return {
      matchedCount: 1,
      modifiedCount: 2,
      upsertedCount: 3
    };
  })
};
export default mock;
