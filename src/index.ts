import express from "express";
import bodyParser from "body-parser";
import connect from "./connect";
import dotenv from "dotenv";

import {
  UserController,
  DialogController,
  MessagesController,
} from "./controllers/index";
import { updateLastSeen } from "./middleware";

const app = express();

app.use(updateLastSeen);

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessagesController();

dotenv.config();

connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/user/create", User.create);
app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);

app.post("/dialog", Dialog.create);
app.get("/dialog", Dialog.index);

app.post("/messages", Messages.create);
app.get("/messages", Messages.index);
app.delete("/messages/:id", Messages.delete);

app.listen(process.env.PORT, () => {
  console.log(`server run on ${process.env.PORT} port`);
});
