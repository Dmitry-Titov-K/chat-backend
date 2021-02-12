import jwt from "jsonwebtoken";
import { IUser } from "../Models/User";
import { reduce } from "lodash";
import { IndexType } from "typescript";

export default async (user: IUser) => {
  let jwToken = await jwt.sign(
    {
      data: reduce(
        user,
        (result: Array<string>, value: string, key: string) => {
          if (key !== "password") {
            result[key] = value;
          }
          return result;
        },
        []
      ),
    },
    process.env.JWT_KEY,
    {
      expiresIn: process.env.JWT_MAX_AGE,
    }
  );
  return jwToken;
};
