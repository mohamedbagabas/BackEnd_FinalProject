import { building } from "@prisma/cilent";
import { Request, Response } from "express";
import { prisma } from "../config/db";

export const getAllbuilding = async (req: Request, res: Response) => {
  try {
    const getbuilding = await prisma.building.findMany();
    return res.status(200).json(getbuilding);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "server Error !",
    });
  }
};

export const addNewBuilding = async (req: Request, res: Response) => {
  try {
    const newBuilding = req.body as building;
    await prisma.building.create({ data: newBuilding });

    return res.status(201).json({
      message: "Building added !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "server Error !",
    });
  }
};
