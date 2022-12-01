import mongoose from "mongoose";
import { orderStatus, roles } from "../constants/index.js";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: roles, required: true },
  password: { type: String, required: true },
});

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },

  status: { type: String, enum: orderStatus, required: true },
  amount: { type: Number, required: true },
  cost: { type: Number, required: true },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Order =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
