import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  StatusCode = 404;
  constructor() {
    super("unknown route");
  }
  serializeError() {
    return [
      {
        message: "404 route not found"
      },
    ];
  }
}
