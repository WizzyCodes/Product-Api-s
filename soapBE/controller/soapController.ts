import soapModel from "../model/soapModel";
import { Request, Response } from "express";

export const getAllSoap = async (req: Request, res: Response) => {
  const store = await soapModel.find();
  res.status(200).json({
    message: "list of all soap",
    data: store,
    status: 200,
  });
};

export const createAllSoap = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;
  const store = await soapModel.create({ title, price, category });
  res.status(201).json({
    message: "phone created successfully",
    data: store,
    status: 201,
  });
};
