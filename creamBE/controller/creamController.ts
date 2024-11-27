import creamModel from "../model/creamModel";
import { Request, Response } from "express";

export const getAllCream = async (req: Request, res: Response) => {
  const store = await creamModel.find();
  res.status(200).json({
    message: "list of all cream",
    data: store,
    status: 200,
  });
};

export const createAllCream = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;
  const store = await creamModel.create({ title, price, category });
  res.status(201).json({
    message: "cream created successfully",
    data: store,
    status: 201,
  });
};
