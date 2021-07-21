import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";

interface ErrorStructure {
  message: string;
  field?: string;
}

interface ErrorResponseBody {
  errors: ErrorStructure[];
}

export function validateRequest(
  req: Request,
  res: Response<ErrorResponseBody>,
  next: NextFunction
): void { 
  const errors = validationResult(req);

    // Errors in body?
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next()
}