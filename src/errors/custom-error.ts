import { ErrorStructure } from "../interface/ErrorStructure"

export abstract class CustomError extends Error{
  abstract StatusCode:number

  constructor(message:string){
    super(message)
    this.name= "CustomError"
    Object.setPrototypeOf(this,CustomError.prototype)
  }
  abstract serializeError():ErrorStructure[]
}