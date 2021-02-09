import  mongoose  from "mongoose";

const connect = async()=>{
    try{
      await mongoose.connect('mongodb://localhost:27017/chat',{useNewUrlParser:true,useUnifiedTopology: true, useCreateIndex: true })
      console.log('connection ok')
    }catch(error){
        return console.log(`error:${error}`)
    }
}
export default connect