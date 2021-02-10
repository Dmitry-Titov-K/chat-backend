import express from 'express'
import {MessagesModel} from '../Models'

class MessageController {
    async index(req:express.Request,res:express.Response){
        const messageId:string = req.params.id
        try {
            const result = await MessagesModel.find({_id:messageId})
            if(result.length){
                res.json({result}).status(200)
            }else{
                res.json({messages:"ERROR-MESSAGE-CONTROLLER::'messages list is empty'"})
            }
        } catch (error) {
            res.json({error}).status(400)
        }
    }
    async create(req:express.Request,res:express.Response){
        const postData={
            text:req.body.text,
            unread:req.body.unread,
            lastMessage:req.body.lastMessage
        }
        try {
            const result = await new MessagesModel(postData)
            if(result){
                res.json({result}).status(200)
            }else{
                res.json({messages:"ERROR-MESSAGE-CONTROLLER::'messages not created'"})
            }
        } catch (error) {
            res.json({error}).status(400)
        }
    }
}
export default MessageController