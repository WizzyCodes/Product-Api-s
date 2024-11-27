import bagModel from "../model/bagModel";
import { Request, Response } from "express";

export const getAllBags = async (req: Request, res: Response) => {
  const store = await bagModel.find();
  res.status(200).json({
    message: "list of all bags",
    data: store,
    status: 200,
  });
};

export const createAllBags = async (req: Request, res: Response) => {
  const { name, color, price } = req.body;

  const store = await bagModel.create({ name, color, price });
  res.status(200).json({
    message: "bag  created successfully",
    data: store,
    status: 201,
  });
};
