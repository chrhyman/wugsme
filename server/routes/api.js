import express from "express";

const router = express.Router();

// example using parameter
router.get("/poker/:id", (req, res) => {
  res.json({ message: "success", id: req.params.id });
});

export default router;
