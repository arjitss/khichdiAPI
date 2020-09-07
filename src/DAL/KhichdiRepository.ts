import mongoose from 'mongoose';
import { menuItem, menuItemSchema } from '../Models/menuItems';

// TODO:
// 1. Exception Handling
// 2. Error Response Handling
// 3. Correct the Jest Mock & do Better Jest Coverage
// 4. Code Documentation - Typedocs

class KhichdiRepo {
  private uri: string;
  private db: any;
  //constructor() {}  //not needed as of now

  connect = async (): Promise<any> => {
    if (this.db) {
      console.log('DB is already connected');
      return true;
    } else {
      this.db = mongoose.connection
        .on('error', console.log)
        .on('disconnected', this.connect)
        .once('open', () => {
          console.log('Database Connected');
        });
      try {
        this.uri = `mongodb+srv://${process.env.mongoDB_ID}:${process.env.mongoDB_passcode}@cluster0-opgl2.mongodb.net/khichdi?retryWrites=true&w=majority`;
        return await mongoose.connect(this.uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
      } catch (error) {
        console.log('Error Connecting DB ', error);
      }
    }
  };

  getMeTheOptionsFromRepoAsync = async (requestArray: any): Promise<any> => {
    try {
      const KhichdiCollection = mongoose.model(
        'KhichdiCollection',
        menuItemSchema,
        'KhichdiCollection'
      );
      const dbResp = await KhichdiCollection.find({
        keyIngrediants: { $all: requestArray }
      }).lean();
      // this.db.close(); No Need
      return dbResp;
    } catch (error) {
      this.db &&
        this.db.close(); /** Needs to close connection -
      Only if mongoose.connect() is success & fails after it, as db connection is established by then. */

      console.log('Error at dbConnect ::', error);
      throw error;
    }
  };

  addFoodOptionsFromRepoAsync = async (foodItem: any): Promise<any> => {
    let value;
    try {
      value = await this.db
        .collection('KhichdiCollection')
        .updateOne(
          { name: foodItem.name },
          { $set: foodItem },
          { upsert: true }
        );
      //console.log(value);
    } catch (error) {
      console.log('Some Error while saving item: ', error);
    }
    return {
      matchedCount: value.matchedCount,
      modifiedCount: value.modifiedCount,
      upsertedCount: value.upsertedCount
    };
  };
}

export default new KhichdiRepo();
