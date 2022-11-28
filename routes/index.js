import express from "express";
const router = express.Router();
import * as User from "../controllers/users.js";
import * as Order from "../controllers/orders.js";
import * as MiddleWare from "../middlewares/index.js";
import * as Product from "../controllers/products.js";

// User Related Stuff //

// Singup user
router.post("/signup", User.signup);
// Login user
router.post("/login", User.login);

// Order Related Stuff //

// User creating an order
router.post("/createOrder", MiddleWare.normalMiddleware, Order.createOrder);
// Owner get all orders in database
router.get("/getAllOrders", MiddleWare.ownerMiddleware, Order.getAllOrders);
// Owner, Employee or User get an order
router.get("/getOrder/:id", MiddleWare.normalMiddleware, Order.getOrder);
// User getting all their orders
router.get("/getUserOrders", MiddleWare.normalMiddleware, Order.getUserOrders);
// Owner or Employee updating an order
router.patch(
  "/updateOrder/:id",
  MiddleWare.employeeMiddleware,
  Order.updateOrder
);
// Owner, User, Employee cancels an order
router.delete(
  "/deleteOrder/:id",
  MiddleWare.normalMiddleware,
  Order.deleteOrder
);

// Product Related stuff //

// Owner create a product
router.post(
  "/createProduct",
  MiddleWare.ownerMiddleware,
  Product.createProduct
);
// Owner, User, Employee get all products
router.get("/getProducts", MiddleWare.normalMiddleware, Product.getProducts);
// Owner Updates a product
router.patch(
  "/updateProduct/:id",
  MiddleWare.ownerMiddleware,
  Product.updateProduct
);

// Owner deletes a product
router.delete(
  "/deleteProduct",
  MiddleWare.ownerMiddleware,
  Product.deleteProduct
);

export default router;
