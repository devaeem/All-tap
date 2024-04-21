import express, { Express, Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import * as Controllers from "../../controllers";
import { validatePagination, validateCreateCategory } from "../../helper";
import { handlePagination } from "../../Utils/validationUtils";

const router = express.Router();

router.get(
  "/categories",
  validatePagination,
  handlePagination,
  Controllers.listCategories
);
router.post(
  "/categories",
  validateCreateCategory,

  Controllers.createCategories
);

export default router;
