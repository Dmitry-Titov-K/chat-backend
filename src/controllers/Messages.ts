import express from 'express'
import {MessagesModel} from '../Models'

class MessageController {
    async index(req:express.Request,res:express.Response){
        const messageId = req.params.id
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
}
export default MessageController