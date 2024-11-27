import phoneModel from "../model/phoneModel";
import { Request, Response } from "express";

export const getAllPhone = async (req: Request, res: Response) => {
  const store = await phoneModel.find();
  res.status(200).json({
    message: "list of all phone",
    data: store,
    status: 200,
  });
};

export const createAllPhone = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await phoneModel.create({ title, price, category });
  res.status(201).json({
    message: "phone created successfully",
    data: store,
    status: 201,
  });
};
