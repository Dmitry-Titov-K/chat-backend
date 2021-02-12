import express from "express";
import connect from "../connect";
import { UserModel } from "../Models";

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await UserModel.updateOne(
      { _id: "60226e82dea6e71fecc0bbf2" },
      { last_seen: new Date() }
    );
    console.log("last seen update");
  } catch (error) {
    console.log(error.message);
    connect();
  }
  next();
};
