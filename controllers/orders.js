import { Order } from "../Dao/index.js";
import mongoose from "mongoose";

// Create a order
export async function createOrder(req, res) {
  try {
    const { product, status, amount, cost } = req.body;
    if ((!product, !status, !amount, !cost))
      return res.status(400).json({ message: "Fill all fields" });

    await Order.create({ product, user: req.user.id, status, amount, cost });

    return res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// Get all orders
export async function getAllOrders(req, res) {
  try {
    const orders = await Order.find({}).populate([
      "product",
      "user",
      "employee",
    ]);

    return res
      .status(200)
      .json({ message: "Orders fetched successfully", data: orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// Get single order
export async function getOrder(req, res) {
  try {
    const order = await Order.findById(req.params.id);

    return res
      .status(200)
      .json({ message: "Order fetched successfully", data: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// Get all orders specific to user
export async function getUserOrders(req, res) {
  try {
    const orders = await Order.find({
      user: mongoose.Types.ObjectId(req.user.id),
    }).populate(["user", "product"]);

    return res
      .status(200)
      .json({ message: "Orders fetched successfully", data: orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// Update order
export async function updateOrder(req, res) {
  try {
    await Order.findByIdAndUpdate(req.params.id, { ...req.body });
    return res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

// Delete order
export async function deleteOrder(req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
