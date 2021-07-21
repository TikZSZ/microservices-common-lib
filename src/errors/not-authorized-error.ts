import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  StatusCode = 401;

  constructor() {
    super("Not authorized");
  }

  serializeError() {
    return [
      {
        message: "Not authorized",
      },
    ];
  }
}
