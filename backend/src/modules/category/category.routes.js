import Router from "express";
import { isLoggedIn } from "../../core/middleware/isLoggedIn.js";
import { isAdmin } from "../../core/middleware/isAdmin.js";
import { validate } from "../../core/middleware/validate.js";
import { createCategorySchema, updateCategorySchema } from "../../shared/validators/category.validator.js";
import { upload } from "../../core/middleware/multer.js";

import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  searchCategories
} from "./category.controller.js";

const categoryRouter = Router();

// Public routes
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/search", searchCategories);

// Admin routes
categoryRouter.post("/create", isLoggedIn, isAdmin, upload.single('collectionImage'), validate(createCategorySchema), createCategory);
categoryRouter.put("/:id", isLoggedIn, isAdmin, upload.single('collectionImage'), validate(updateCategorySchema), updateCategory);
categoryRouter.delete("/:id", isLoggedIn, isAdmin, deleteCategory);

export default categoryRouter;
