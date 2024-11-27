import { model, Schema } from "mongoose";

export interface iProps {
  tite: string;
  price: number;
  category: string;
}
export interface iPropsData extends iProps, Document {}
const bookModel = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);
export default model<iPropsData>("book", bookModel);
