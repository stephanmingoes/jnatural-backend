import {} from "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());
app.use("/api", routes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
const config = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(CONNECTION_URL, config)
  .then(() => app.listen(PORT, () => console.log("Listening on port", PORT)))
  .catch((error) => console.log(error));
