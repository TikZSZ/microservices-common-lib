import { NextFunction, Request, Response } from "express";

import { CustomCookieSessionObject } from "../interface/CookieSessonObject";
import jwt from "jsonwebtoken";
import { UserPayload } from "../interface/UserPayload";






export function currentUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const jsonToken = req.session?.jwt;
  
  if (!jsonToken) {
    next();
    return;
  }
  try {
    const payload = jwt.verify(jsonToken, process.env.JWT_KEY!) as UserPayload;
    req.currentUser = payload;
  } 
  catch (err) {}


  next();
}
