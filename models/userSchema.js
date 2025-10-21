import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  u_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
});

// index for unique email to query faster
userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema, "users");

export default User;
