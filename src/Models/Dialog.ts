import mongoose,{Schema} from "mongoose";


export interface IDialog extends mongoose.Document{
  author:{
    type:Schema.Types.ObjectId,
    ref:string
  },
  partner:{
    type:Schema.Types.ObjectId,
    ref:string
  },
  lastMessage:{
    type:Schema.Types.ObjectId,
    ref:string
  },
}

const DialogSchema = new Schema(
  {
    author: {
      type:Schema.Types.ObjectId,
      ref:"User"
    },
    partner:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },
    lastMessage:{
      type:Schema.Types.ObjectId,
      ref:"Messages"
    }
  },
  {
    timestamps: true,
  }
);

const DialogModel = mongoose.model<IDialog>('Dialog',DialogSchema)

export default DialogModel