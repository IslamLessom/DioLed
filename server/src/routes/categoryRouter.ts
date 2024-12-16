import express, { Request, Response } from "express";
import {
  deleteCategory,
  editCategory,
  getCategory,
  getCategoryId,
  postCategory,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/cat", async (req: Request, res: Response) => {
  try {
    await getCategory(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories", error });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await postCategory(req, res);
  } catch (error) {
    res.status(400).json({ message: "Error creating category", error });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    await getCategoryId(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category", error });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    await editCategory(req, res);
  } catch (error) {
    res.status(400).json({ message: "Error updating category", error });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await deleteCategory(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
});

export default router;