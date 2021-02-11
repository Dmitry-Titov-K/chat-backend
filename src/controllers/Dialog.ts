import bodyParser from "body-parser";
import express from "express";
import { Schema } from "mongoose";
import { DialogModel, MessagesModel } from "../Models";

class DialogController {
  async create(req: express.Request, res: express.Response) {
    const postData = {
      author: req.body.author,
      partner: req.body.partner,
    };
    const dialog = new DialogModel(postData);
    try {
      const result_dialog = await dialog.save();
      if (!result_dialog) {
        res.json({ error: "error dialog create" });
      } else {
        const message = new MessagesModel({
          text: req.body.text,
          dialog: dialog._id,
          user: req.body.author,
        });
        const result_messages = await message.save();
        if (!result_messages) {
          res.json({ error: "error creation message on dialog" });
        } else {
          res.json({ dialog: result_dialog });
        }
      }
    } catch (error) {
      console.log(`ERROR::dialog not create`);
      res.send(error.message);
    }
  }
  /*   getMe(){
        // TODO: функция возвращающая данные о самом себе из аунтификации
    } */
  async index(req: express.Request, res: express.Response) {
    const authorId: any = "6024003e86af7c2c5ea00345"; //TODO: исправить статику
    try {
      const result = await DialogModel.findOne({ author: authorId }).populate([
        "author",
        "partner",
      ]);
      res.json(result);
    } catch (error) {
      res.status(404).json({ message: "user not found" });
    }
  }
  /*  async delete(req:express.Request,res:express.Response){
        const id:string = req.params.id
        try {
          const result = await UserModel.findOneAndDelete({_id:id})
          if(!result){
              res.json({message:'DELETE:user not found deleted'})
          }else{
               res.status(200).json({message:`user ${result.fullname} deleted`})
          }
        } catch (error) {
            res.status(404).json({message:'not found'})
        }
        
    }   */
}

export default DialogController;
