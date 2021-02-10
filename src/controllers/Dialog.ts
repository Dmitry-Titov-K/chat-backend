import express from 'express'
import { Schema } from 'mongoose';
import {DialogModel} from '../Models'

class DialogController {
    async create(req:express.Request,res:express.Response) {
            const postData={
                author:req.body.author,
                partner:req.body.partner,
            }
            const dialog = new DialogModel(postData);
                try {
                    await dialog.save()
                    res.send(`dialog create`)
                } catch (error) {
                    console.log(`ERROR::dialog not create`)
                    res.send(error.message)
                }
            }
  /*   getMe(){
        // TODO: функция возвращающая данные о самом себе из аунтификации
    } */
    async index(req:express.Request,res:express.Response){
        const authorId:any = req.params.id
        try {
          const result = await DialogModel.find({author:authorId}).populate(["author"])
          res.json(result)
        } catch (error) {
            res.status(404).json({message:'user not found'})
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

    export default DialogController