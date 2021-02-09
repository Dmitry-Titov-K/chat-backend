import { env } from "process";
import express from 'express'
import bodyParser, { json } from 'body-parser'
import connect from './connect'
import {UserController} from './controllers/index'

const app = express();

const User = new UserController()

const PORT = env.PORT || 3000

connect()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/user/create',User.create)
app.get('/user/:id',User.index)

app.listen(PORT,()=>{
    console.log(`server run on ${PORT} port`)
})