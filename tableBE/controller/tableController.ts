import tableModel from "../model/tableModel";
import { Request, Response } from "express";

export const getAllTable = async (req: Request, res: Response) => {
  const store = await tableModel.find();
  res.status(200).json({
    message: "list of all tables",
    data: store,
    status: 200,
  });
};

export const createAllTable = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await tableModel.create({ title, price, category });
  res.status(201).json({
    message: "table created successfully",
    data: store,
    status: 201,
  });
};
