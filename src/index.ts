import { env } from "process";
import express from 'express'
import bodyParser from 'body-parser'
import connect from './connect'
import {UserController,DialogController} from './controllers/index'

const app = express();

const User = new UserController()
const Dialog = new DialogController()
const PORT = env.PORT || 3000

connect()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/user/create',User.create)
app.get('/user/:id',User.show)
app.delete('/user/:id',User.delete)

app.post('/dialog',Dialog.create)
app.get('/dialog/:id',Dialog.index)

app.listen(PORT,()=>{
    console.log(`server run on ${PORT} port`)
})