import carModel from "../model/carModel";
import { Request, Response } from "express";

export const getAllpaint = async (req: Request, res: Response) => {
  const store = await carModel.find();
  res.status(200).json({
    message: "list of all paints",
    data: store,
    status: 200,
  });
};

export const createAllPaint = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await carModel.create({ title, price, category });
  res.status(201).json({
    message: "paint created successfully",
    data: store,
    status: 201,
  });
};
