import bodyParser from 'body-parser';
import {
  getMeTheOptionsAsync,
  addFoodOptionsAsync
} from '../Service/KhichdiService';

/**
 * This is Controller function.
 *
 * @remarks
 * This controller function is for getting the menu items and posting the items to DB.
 * This controller function will eventually be changed to Class for more robust Architecture
 *
 * @param app - const app = express();
 *
 */

// TODO:
// 1. Exception Handling
// 2. Error Response Handling
// 3. Code Documentation

export const KhichdiController = (app: any) => {
  const responseHeader = {
    'content-type': 'application/json',
    'cache-control': 'public, max-age=21600'
  };
  const requestItemJson = bodyParser.json();
  /**
   *  The Get Controller - giveMeOptions
   */
  app.get('/api/giveMeOptions', async (req, res) => {
    const { ingrediants } = req.query;
    const searchParameters = ingrediants.toString();
    const searchArray = searchParameters.split(' ');
    const resturnData = await getMeTheOptionsAsync(searchArray);
    res.set(responseHeader);
    res.status(200);
    res.json(resturnData);
  });

  /**
   *  The Post Controller - addFoodOptions
   */

  app.post('/api/addFoodOptions', requestItemJson, async (req, res) => {
    const { fooditems } = req.body;
    const itemsAdded: Array<any> = [];

    for (let i = 0; i < fooditems.length; i++) {
      try {
        const resturnData = await addFoodOptionsAsync(fooditems[i]);
        itemsAdded.push(resturnData);
      } catch (error) {
        console.log('some error');
      }
    }
    res.set(responseHeader);
    res.status(201);
    res.json(itemsAdded);
  });
};
