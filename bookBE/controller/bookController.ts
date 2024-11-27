import bookModel from "../model/bookModel";
import { Request, Response } from "express";

export const getAllBook = async (req: Request, res: Response) => {
  const store = await bookModel.find();
  res.status(200).json({
    message: "list of all soap",
    data: store,
    status: 200,
  });
};

export const createAllBook = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;
  const store = await bookModel.create({ title, price, category });
  res.status(201).json({
    message: "phone created successfully",
    data: store,
    status: 201,
  });
};
