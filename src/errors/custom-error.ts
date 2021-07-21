import { ErrorStructure } from "../middlewares/error-handler"



export abstract class CustomError extends Error{
  abstract StatusCode:number

  constructor(message:string){
    super(message)
  }
  abstract serializeError():ErrorStructure[]
}