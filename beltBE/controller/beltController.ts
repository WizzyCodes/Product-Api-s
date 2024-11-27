import beltModel from "../model/beltModel";
import { Request, Response } from "express";

export const getAllBelt = async (req: Request, res: Response) => {
  const store = await beltModel.find();
  res.status(200).json({
    message: "list of all belts",
    data: store,
    status: 200,
  });
};

export const createAllBelt = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await beltModel.create({ title, price, category });
  res.status(201).json({
    message: "belt created successfully",
    data: store,
    status: 201,
  });
};
