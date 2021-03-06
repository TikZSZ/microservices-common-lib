import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError{
  constructor(private errors: ValidationError[]) {
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
  serializeError() {
    return this.errors.map((err) => {
      return {
        message: err.msg as string,
        field: err.param,
      };
    });
  }
  get StatusCode(): number {
    return 400;
  }
}
