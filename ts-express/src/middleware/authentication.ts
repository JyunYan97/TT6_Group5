import { NextFunction, Request, Response } from 'express'
import configuration from '../config/configuration'
import jwt from 'jsonwebtoken'
import JwtPayloadType from '../utils/jwtpayload.type'

export interface RequestWithUserId extends Request {
  userId?: string
}

const authenticateJWT = (
  req: RequestWithUserId,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, configuration().secretKey, (err, payload) => {
      if (err) {
        return res.sendStatus(403)
      }
      const jwtpayload = payload as JwtPayloadType
      req.userId = jwtpayload.userId
      next()
    })
  } else {
    res.sendStatus(401)
  }
}

export default authenticateJWT
