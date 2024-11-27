import { model, Schema } from "mongoose";

export interface iProps {
  name: String;
  color: String;
  price: Number;
}
export interface iPropsData extends iProps, Document {}

const bagModel = new Schema(
  {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);
export default model<iPropsData>("bag", bagModel);
