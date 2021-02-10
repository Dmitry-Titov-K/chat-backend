import mongoose, {Schema} from 'mongoose'

export interface IMessages extends mongoose.Document{
    text:{
        type:string,
        requred:boolean
    },
    lastMessages:{
        type:Schema.Types.ObjectId
    },
    unread:boolean
}

const MessagesSchema = new Schema({
    text:{
        type:String,
        required:true
    },
    lastMessage:{ type:Schema.Types.ObjectId, ref:"Dialog"},
    unread:Boolean
},{
    timestamps:true
})

const MessagesModel = mongoose.model<IMessages>("Messages",MessagesSchema)

export default MessagesModel 