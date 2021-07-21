import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to database";
  constructor() {
    super('Error connecting to db');
    Object.setPrototypeOf(this,DatabaseConnectionError.prototype)
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
