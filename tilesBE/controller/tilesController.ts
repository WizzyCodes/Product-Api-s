import { Request, Response } from "express";
import tilesModel from "../model/tilesModel";

export const getAllTiles = async (req: Request, res: Response) => {
  const store = await tilesModel.find();
  res.status(200).json({
    message: "list of all tiles",
    data: store,
    status: 200,
  });
};

export const createAllTiles = async (req: Request, res: Response) => {
  const { title, price, category } = req.body;

  const store = await tilesModel.create({ title, price, category });
  res.status(201).json({
    message: "tiles created successfully",
    data: store,
    status: 201,
  });
};
