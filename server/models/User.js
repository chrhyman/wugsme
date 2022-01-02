import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  pwHash: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.Model("User", userSchema);

export default User;
