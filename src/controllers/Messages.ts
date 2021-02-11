import express from "express";
import { MessagesModel } from "../Models";

class MessageController {
  async index(req: express.Request, res: express.Response) {
    const dialogId: string | any = req.query.dialog;
    try {
      const result = await MessagesModel.find({ dialog: dialogId }).populate([
        "dialog",
      ]);
      if (result.length) {
        res.json({ result }).status(200);
      } else {
        res.json({
          messages: "ERROR-MESSAGE-CONTROLLER::'no messages on this dialog'",
        });
      }
    } catch (error) {
      res.json({ error }).status(400);
    }
  }
  async create(req: express.Request, res: express.Response) {
    const postData = {
      text: req.body.text,
      read: req.body.read,
      dialog: req.body.dialog_id,
      user: req.body.user,
    };
    try {
      const message = new MessagesModel(postData);
      await message.save();
      res.json({ message }).status(201);
    } catch (error) {
      res.json({ error }).status(400);
    }
  }
  async delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    try {
      const result = await MessagesModel.findOneAndDelete({ _id: id });
      if (!result) {
        res.json({ message: "DELETE-MESSAGE:message not found deleted" });
      } else {
        res.status(200).json({ message: `message delete` });
      }
    } catch (error) {
      res.status(404).json({ message: "not found" });
    }
  }
}
export default MessageController;
