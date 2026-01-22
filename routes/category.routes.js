//! routing for categories
import express from "express";
const router = express.Router();

//!category
router.get("/", (req, res) => {
  res.json({
    message: "Categories fetched",
  });
});

//!get by id

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Category id:${id} fetched`,
  });
});

//!update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Category id:${id} updated",
  });
});

//!create
router.post("/", (req, res) => {
  res.json({
    message: "Category created",
  });
});

//!delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Category id:${id} deleted",
  });
});

export default router;
