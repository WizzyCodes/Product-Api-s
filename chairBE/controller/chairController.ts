import chairModel from "../model/chairModel";
import { Request, Response } from "express";

export const getAllChair = async (req: Request, res: Response) => {
  const store = await chairModel.find();
  res.status(200).json({
    message: "list of all chair",
    data: store,
    status: 200,
  });
};

export const createAllChair = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await chairModel.create({ title, price, category });
  res.status(201).json({
    message: "chair created successfully",
    data: store,
    status: 201,
  });
};
