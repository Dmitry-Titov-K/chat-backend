import mongoose, { Schema } from "mongoose";
import { IDialog } from "./Dialog";
import { IUser } from "./User";

export interface IMessages extends mongoose.Document {
  text: string;
  dialog: IDialog;
  read: boolean;
  user: IUser;
}

const MessagesSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    dialog: { type: Schema.Types.ObjectId, ref: "Dialog" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MessagesModel = mongoose.model<IMessages>("Messages", MessagesSchema);

export default MessagesModel;
