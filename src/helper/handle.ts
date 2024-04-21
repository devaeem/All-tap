import {
  body,
  query,
  ValidationChain,
  validationResult,
} from "express-validator";

export const validateCreateCategory = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),
];

export const validatePagination: ValidationChain[] = [
  query("page")
    .isString()
    .withMessage("Page must be a string")
    .notEmpty()
    .withMessage("Page is required"),

  query("pageSize")
    .isString()
    .withMessage("pageSize must be a string")
    .notEmpty()
    .withMessage("pageSize is required"),
];
