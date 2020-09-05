import khichdiRepository from '../DAL/KhichdiRepository';

// TODO:
// 1. Exception Handling
// 2. Error Response Handling
// 3. Code Documentation

export const getMeTheOptionsAsync = async (searchArray: any): Promise<any> => {
  await khichdiRepository.connect();
  const returnData = await khichdiRepository.getMeTheOptionsFromRepoAsync(
    searchArray
  );
  return returnData;
};

export const addFoodOptionsAsync = async (searchArray: any): Promise<any> => {
  await khichdiRepository.connect();
  const resturnData = await khichdiRepository.addFoodOptionsFromRepoAsync(
    searchArray
  );
  return resturnData;
};
