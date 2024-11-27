import penModel from "../model/penModel";
import { Request, Response } from "express";

export const getAllPen = async (req: Request, res: Response) => {
  const store = await penModel.find();
  res.status(200).json({
    message: "list of all pen",
    data: store,
    status: 200,
  });
};

export const createAllPen = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await penModel.create({ title, price, category });
  res.status(201).json({
    message: "pen created successfully",
    data: store,
    status: 201,
  });
};
