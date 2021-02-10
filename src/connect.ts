import  mongoose  from "mongoose";

const connect = async()=>{
    try{
      await mongoose.connect('mongodb://localhost:27017/chat',
      { useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false  })
      console.log('connection ok')
    }catch(error){
        return console.log(`error:${error}`)
    }
}
export default connect