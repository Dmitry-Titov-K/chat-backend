import mongoose,{ Schema } from "mongoose";
import isEmail from 'validator/lib/isEmail';
const UserSchema = new Schema(
  {
    email: {
      type:String,
      required:true,
      validate:[isEmail,'invalid Email!'],
      unique: true
    }, 
    avatar: String,
    fullname: String,
    firstname: String,
    surname: String,
    password: {
      type:String,
      required: true
    },
    confirmed: Boolean,
    confirm_hash: String,
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('User',UserSchema)

export default UserModel