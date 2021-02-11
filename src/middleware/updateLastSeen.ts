import express from "express";
import { UserModel } from "../Models";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await UserModel.updateOne(
      { _id: "6024003e86af7c2c5ea00345" },
      { last_seen: new Date() }
    );
    console.log("last seen update");
  } catch {
    throw new Error();
  }
  next();
};
