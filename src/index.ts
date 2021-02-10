import { env } from "process";
import express from 'express'
import bodyParser from 'body-parser'
import connect from './connect'
import {UserController,DialogController, MessagesController} from './controllers/index'


const app = express();

const User = new UserController()
const Dialog = new DialogController()
const Messages = new MessagesController()

const PORT = env.PORT || 3000

connect()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/user/create',User.create)
app.get('/user/:id',User.show)
app.delete('/user/:id',User.delete)

app.post('/dialog',Dialog.create)
app.get('/dialog/:id',Dialog.index)

app.post('/messages',Messages.create)
app.get('/messages/:id',Messages.index)

app.listen(PORT,()=>{
    console.log(`server run on ${PORT} port`)
})