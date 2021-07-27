import { CustomCookieSessionObject } from "./interface/CookieSessonObject"
import { UserPayload } from "./interface/UserPayload"

export * from "./errors/"
export * from "./middlewares"
export * from "./interface"
export * from "./events"

declare global{
  namespace Express {
    interface Request {
      currentUser?:UserPayload|null
      session?:CustomCookieSessionObject | null
    }
  }
}