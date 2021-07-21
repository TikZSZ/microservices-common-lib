import { CustomCookieSessionObject } from "./interface/CookieSessonObject"
import { UserPayload } from "./interface/UserPayload"

export * from "./errors/custom-error"
export * from "./errors/bad-request-error"
export * from "./errors/database-connection-error"
export * from "./errors/not-authorized-error"
export * from "./errors/not-found-error"
export * from "./errors/request-validation-error"

export * from "./middlewares/error-handler" 
export * from "./middlewares/current-user"
export * from "./middlewares/require-auth" 
export * from "./middlewares/validate-request" 

export * from "./interface/AuthenticationBody"
export * from "./interface/CookieSessonObject"
export * from "./interface/UserEnum"
export * from "./interface/UserPayload"



//

declare global{
  namespace Express {
    interface Request {
      currentUser?:UserPayload|null
      session?:CustomCookieSessionObject | null
    }
  }
}