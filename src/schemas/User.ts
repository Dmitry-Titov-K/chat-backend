import mongoose,{ Schema } from "mongoose";
const UserSchema = new Schema(
  {
    email: {
      type:String,
      required:true
    }, 
    avatar: String,
    fullname: String,
    firstname: String,
    surname: String,
    password: String,
    confirmed: Boolean,
    confirm_hash: String,
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User',UserSchema)

export default User