import passport from 'passport'
import { Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken'

import UserService from '../services/user'

async function tokenVerify(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers.authorization)
  const token = req.headers.authorization?.split(' ')[1]
  const user = JWT.decode(token as string) as { id: string }

  if (user === null) {
    console.log('NOT logged in, or you forgot to pass the token in the fetch')
  } else {
    const loggedInUser = await UserService.findById(user.id)
    req.body.loggedInUser = loggedInUser
  }

  return next()
  /*
          passport.authenticate("jwt", function (error, user) {
              if (error) {
                  return next(new InternalServerError())
              }
              if (!user) {
                  return next(new UnauthorizedError('Invalid token, Please login again'))
              }
              console.log('the user is')
              console.log(user)
              
          })(req, res, next)*/
}

export default tokenVerify
