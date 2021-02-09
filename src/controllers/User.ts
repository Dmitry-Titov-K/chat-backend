import express from 'express'
import {UserModel} from '../schemas'

class UserController {
    async create(req:express.Request,res:express.Response) {
            const postData={
                email:req.body.email,
                fullname:req.body.fullname,
                password:req.body.password
            }
            const user = new UserModel(postData);
                try {
                    await user.save()
                    console.log(`create${user}`)
                    res.send("create")
                } catch (error) {
                    console.log(`ERROR::${error.message}`)
                    res.send(error.message)
                }
            }
    async index(req:express.Request,res:express.Response){
        const id:string = req.params.id
        try {
          const result = await UserModel.findById(id)
            res.json(result)
        } catch (error) {
            res.json({message:'not found'}).status(404).end()
        }
        
    }  
}

    export default UserController