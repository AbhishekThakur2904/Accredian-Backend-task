import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * Validates the request body against the validators defined in the route
 * and sends a 400 response with the validation errors if there are any.
 * Otherwise, calls next() to continue the middleware chain.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next function.
 * @returns {void}
 */

const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return; 
  }
  next(); 
};

export default validateRequest;
