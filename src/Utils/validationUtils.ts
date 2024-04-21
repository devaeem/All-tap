import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult } from "express-validator";

export const handlePagination = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
