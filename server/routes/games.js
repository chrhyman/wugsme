import express from "express";

import { getGamesRoot } from "../controllers/games.js";

const router = express.Router();

router.get("/", getGamesRoot);

export default router;
