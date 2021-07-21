import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export interface ErrorStructure {
  message: string;
  field?: string;
}

export interface ErrorResponseBody {
  errors: ErrorStructure[];
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorResponseBody>,
  next: NextFunction
): void {
  if (err.name==="CustomError") {
    console.log("hello World"); 
    const error = err as CustomError
    res.status(error.StatusCode).send({errors:error.serializeError()});
    return
  }
  res.status(400).send({
    errors: [
      {
        message: "something went wrong",
      },
    ],
  });
}
