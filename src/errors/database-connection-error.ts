import { ErrorResponseBody } from "../middlewares/error-handler";
import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to database";
  constructor() {
    super('Error connecting to db');
  }

  serializeError() {
    return [
      {message:this.reason}
    ]
  }

  get StatusCode(): number {
    return 500;
  }
}
