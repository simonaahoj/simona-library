import express, { Request, Response, NextFunction } from 'express'
import compression from 'compression'

import bodyParser from 'body-parser'
import lusca from 'lusca'
import passport from 'passport'
import dotenv from 'dotenv'
import cors from 'cors'

import loggedInUserRouter from './routers/loggedInUser'
import borrowedBookRouter from './routers/borrowedBook'
import userRouter from './routers/user'
import authorRouter from './routers/author'
import bookRouter from './routers/book'
import apiErrorHandler from './middlewares/apiErrorHandler'
import passportStrategy from './config/passport'
import tokenVerify from './middlewares/tokenVerify'

dotenv.config({ path: '.env' })
const app = express()
app.use(cors())
// Express configuration
app.set('port', process.env.PORT || 3000)

// Use common 3rd-party middlewares
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

passport.use(passportStrategy.google)

app.post(
  '/google/login',
  passport.authenticate('google-id-token', { session: false }),
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user)
    res.send(req.user)
  }
)
// Use movie router

app.use('/api/v1/books', bookRouter)
app.use('/api/v1/authors', authorRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/borrowedBooks', tokenVerify, borrowedBookRouter)
app.use('/api/v1/loggedInUser', tokenVerify, loggedInUserRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
