import cementModel from "../model/cementModel";
import { Request, Response } from "express";

export const getAllCement = async (req: Request, res: Response) => {
  const store = await cementModel.find();
  res.status(200).json({
    message: "list of all cement",
    data: store,
    status: 200,
  });
};

export const createAllCement = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;
  const store = await cementModel.create({ title, price, category });
  res.status(201).json({
    message: "cement created successfully",
    data: store,
    status: 201,
  });
};
