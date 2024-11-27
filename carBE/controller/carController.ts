import carModel from "../model/carModel";
import { Request, Response } from "express";

export const getAllCar = async (req: Request, res: Response) => {
  const store = await carModel.find();
  res.status(200).json({
    message: "list of all cars",
    data: store,
    status: 200,
  });
};

export const createAllCar = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await carModel.create({ title, price, category });
  res.status(201).json({
    message: "car created successfully",
    data: store,
    status: 201,
  });
};
