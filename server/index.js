import { config } from "dotenv";
config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import rootRoutes from "./routes/root.js";
import apiRoutes from "./routes/api.js";
import gamesRoutes from "./routes/games.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", rootRoutes);
app.use("/api", apiRoutes);
app.use("/games", gamesRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL; // from .env file
const PORT = process.env.PORT || 5000; // maybe from deployment host

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
