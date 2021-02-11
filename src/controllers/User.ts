import express from "express";
import { UserModel } from "../Models";

class UserController {
  async create(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };
    const user = new UserModel(postData);
    try {
      await user.save();
      console.log(`create${user.fullname}`);
      res.send(`create ${user.fullname}`);
    } catch (error) {
      console.log(`ERROR::${error.message}`);
      res.send(error.message);
    }
  }
  getMe() {
    // TODO: функция возвращающая данные о самом себе из аунтификации
    // TODO: Сделать послденее посещение
  }
  async show(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    try {
      const result = await UserModel.findById(id);
      if (result == null) {
        throw new Error();
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: "user not found" });
    }
  }
  async delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    try {
      const result = await UserModel.findOneAndDelete({ _id: id });
      if (!result) {
        res.json({ message: "DELETE:user not found deleted" });
      } else {
        res.status(200).json({ message: `user ${result.fullname} deleted` });
      }
    } catch (error) {
      res.status(404).json({ message: "not found" });
    }
  }
}

export default UserController;
