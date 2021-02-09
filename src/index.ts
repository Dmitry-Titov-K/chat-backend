import { env } from "process";
import express from 'express'
import  mongoose  from "mongoose";

import User from './schemas/User'

const app = express();
const connect = async()=>{
    try{
      await mongoose.connect('mongodb://localhost:27017/chat',{useNewUrlParser:true,useUnifiedTopology: true })
      console.log('connection ok')
    }catch(error){
        return console.log(`error:${error}`)
    }
}
const user = new User({email: 'falosjshwarrior@mail.ru', fullname:'Dmitry Titov' });

user.save().then(()=>console.log('USER CREATE')).catch(()=>console.log('error'))


connect()

const PORT = env.PORT || 3000

app.get('/',(req:object,res:any)=>{
    res.send('hello')
})

app.listen(PORT,()=>{
    console.log(`server run on ${PORT} port`)
})