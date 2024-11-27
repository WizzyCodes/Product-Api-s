import torchModel from "../model/torchModel";
import { Request, Response } from "express";

export const getAllTorch = async (req: Request, res: Response) => {
  const store = await torchModel.find();
  res.status(200).json({
    message: "list of all torch",
    data: store,
    status: 200,
  });
};

export const createAllTorch = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await torchModel.create({ title, price, category });
  res.status(201).json({
    message: "torch created successfully",
    data: store,
    status: 201,
  });
};
