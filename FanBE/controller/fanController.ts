import FanModel from "../model/FanModel";
import { Request, Response } from "express";

export const getAllBag = async (req: Request, res: Response) => {
  const store = await FanModel.find();
  res.status(200).json({
    message: "list of all bags",
    data: store,
    status: 200,
  });
};

export const createAllBag = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await FanModel.create({ title, price, category });
  res.status(201).json({
    message: "gab created successfully",
    data: store,
    status: 201,
  });
};
