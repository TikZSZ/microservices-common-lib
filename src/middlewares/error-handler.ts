import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
import { ErrorStructure,ErrorResponseBody } from "../interface/ErrorStructure";



export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorResponseBody>,
  next: NextFunction
): void {
  if (err instanceof CustomError) {
    res.status(err.StatusCode).send({errors:err.serializeError()});
    return
  }
  console.error(err)
  res.status(400).send({
    errors: [
      {
        message: "something went wrong",
      },
    ],
  });
}
