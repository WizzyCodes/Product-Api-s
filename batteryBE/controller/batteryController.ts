import batteryModel from "../model/batteryModel";
import { Request, Response } from "express";

export const getAllBattery = async (req: Request, res: Response) => {
  const store = await batteryModel.find();
  res.status(200).json({
    message: "list of all batteries",
    data: store,
    status: 200,
  });
};

export const createAllBattery = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await batteryModel.create({ title, price, category });
  res.status(201).json({
    message: "battery created successfully",
    data: store,
    status: 201,
  });
};
