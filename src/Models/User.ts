import mongoose, {
  Schema,
  Document,
} from "mongoose";
import isEmail from "validator/lib/isEmail";

export interface IUser extends mongoose.Document {
  email: string;
  avatar: string;
  fullname: string;
  surname: string;
  password: string;
  confirmed: boolean;
  confirm_hash: string;
  last_seen: Date;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: [isEmail, "invalid Email!"],
      unique: true,
    },
    avatar: String,
    fullname: String,
    firstname: String,
    surname: String,
    password: {
      type: String,
      required: true,
    },
    confirmed: Boolean,
    confirm_hash: String,
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<IUser>(
  "User",
  UserSchema
);

export default UserModel;
