import mongoose from "mongoose";

const User = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  name: String,
  COVID: Boolean,
  VACCINED: Boolean,
  when: Date || String,
  where: String,
  etc: String || null,
});

const UserModel = mongoose.model("user", User);
export default UserModel;
