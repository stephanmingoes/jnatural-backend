import jwt from "jsonwebtoken";
import {} from "dotenv/config";
import { roles } from "../constants/index.js";

export async function normalMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ message: "No toke supplied" });

  try {
    const data = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = data;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "User not authorized" });
  }
}

export async function ownerMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ message: "No toke supplied" });

  try {
    const data = await jwt.verify(token, process.env.TOKEN_SECRET);

    if (data?.role !== roles[0]) {
      return res.status(403).json({ message: "User not authorized" });
    }
    req.user = data;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "User not authorized" });
  }
}
export async function employeeMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ message: "No toke supplied" });

  try {
    const data = await jwt.verify(token, process.env.TOKEN_SECRET);

    if (data?.role == roles[0]) return next();
    if (data?.role !== roles[1]) {
      return res.status(403).json({ message: "User not authorized" });
    }
    req.body.user = data;

    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "User not authorized" });
  }
}
