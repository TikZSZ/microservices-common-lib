import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  StatusCode = 400;
  constructor( message: string) {
    super(message);
  }
  serializeError() {
    return [
      {
        message: this.message
      },
    ];
  }
}