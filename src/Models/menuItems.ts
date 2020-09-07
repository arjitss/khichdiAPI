import mongoose from 'mongoose';

export type menuItem = {
  id: string;
  name: string;
  typeofFood: string;
  keyIngrediants: [string];
  Cuisine: string;
  Likes: number;
};

const Schema = mongoose.Schema;
export const menuItemSchema = new Schema({
  id: String,
  name: String,
  typeofFood: String,
  keyIngrediants: [String],
  Cuisine: String,
  Likes: Number
});
