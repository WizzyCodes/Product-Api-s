import { Request, Response } from "express";
import sugarModel from "../model/sugarModel";

export const getAllSugar = async (req: Request, res: Response) => {
  const store = await sugarModel.find();
  res.status(200).json({
    message: "list of all sugar",
    data: store,
    status: 200,
  });
};

export const createAllSugar = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await sugarModel.create({ title, price, category });
  res.status(201).json({
    message: "sugar created successfully",
    data: store,
    status: 201,
  });
};
