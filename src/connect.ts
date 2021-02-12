import mongoose from "mongoose";

const reconnect = async () => {
  try {
    console.log("start reconnecting...");
    await connect();
  } catch (error) {
    return console.log("error listener");
  }
};

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    return console.log("connection ok");
  } catch (error) {
    reconnect();
    return console.log(`error:${error}`);
  }
};
export default connect;
