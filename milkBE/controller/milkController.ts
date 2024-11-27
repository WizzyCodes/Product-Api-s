import milkModel from "../model/milkModel";
import { Request, Response } from "express";

export const getAllMilk = async (req: Request, res: Response) => {
  const store = await milkModel.find();
  res.status(200).json({
    message: "list of all milk",
    data: store,
    status: 200,
  });
};

export const createAllMilk = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;
  const store = await milkModel.create({ title, price, category });
  res.status(201).json({
    message: "milk created successfully",
    data: store,
    status: 201,
  });
};
