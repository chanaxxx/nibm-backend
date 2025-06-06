import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const LoginModel = mongoose.model("Login", LoginSchema);
export default LoginModel;
