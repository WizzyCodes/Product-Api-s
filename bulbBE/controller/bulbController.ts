import bulbModel from "../model/bulbModel";
import { Request, Response } from "express";

export const getAllBulb = async (req: Request, res: Response) => {
  const store = await bulbModel.find();
  res.status(200).json({
    message: "list of all bulb",
    data: store,
    status: 200,
  });
};

export const createAllBulb = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;
  const store = await bulbModel.create({ title, price, category });
  res.status(201).json({
    message: "bulb created successfully",
    data: store,
    status: 201,
  });
};
