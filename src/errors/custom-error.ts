import { ErrorStructure } from "../middlewares/error-handler"

export abstract class CustomError extends Error{
  abstract StatusCode:number

  constructor(message:string){
    super(message)
    Object.setPrototypeOf(this,CustomError.prototype)
  }
  abstract serializeError():ErrorStructure[]
}