import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  StatusCode = 404;
  constructor() {
    super("unknown route");
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
  serializeError() {
    return [
      {
        message: "404 not found"
      },
    ];
  }
}
