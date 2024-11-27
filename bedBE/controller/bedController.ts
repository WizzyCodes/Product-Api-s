import bedModel from "../model/bedModel";
import { Request, Response } from "express";

export const getAllBed = async (req: Request, res: Response) => {
  const store = await bedModel.find();
  res.status(200).json({
    message: "list of all bed",
    data: store,
    status: 200,
  });
};

export const createAllBed = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await bedModel.create({ title, price, category });
  res.status(201).json({
    message: "bed created successfully",
    data: store,
    status: 201,
  });
};
