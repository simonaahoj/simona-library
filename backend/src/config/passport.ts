import passport from 'passport'
import passportLocal from 'passport-local'
import passportFacebook from 'passport-facebook'
import googleStrategy from 'passport-google-id-token'
import UserService from '../services/user'

import JWT from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { stringify } from 'node:querystring'
import User from '../models/User'

const LocalStrategy = passportLocal.Strategy
const FacebookStrategy = passportFacebook.Strategy

const configuration = {
  clientID: process.env.GOOGLE_CLIENT_ID,
}

const letMeKnowWhenItsDone = async (
  parsedToken: any,
  googleId: any,
  done: any
) => {
  console.log('parsedToken', parsedToken)
  let user = undefined

  try {
    user = await UserService.findByEmail(parsedToken.payload.email)
  } catch {
    //user was no found
    console.log(parsedToken.payload)
    console.log('creating new user')

    const newUser = new User({
      firstName: parsedToken.payload.given_name,
      lastName: parsedToken.payload.family_name,
      birthDate: new Date(),
      email: parsedToken.payload.email,
      joinDate: new Date(),
      imgUrl: parsedToken.payload.picture,
      admin: false,
    })

    user = await UserService.create(newUser)
  }

  console.log(user)
  const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET as string)
  done(null, token)
}

const google = new googleStrategy(configuration, letMeKnowWhenItsDone)

export default { google }
