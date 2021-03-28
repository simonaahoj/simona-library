import { Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken'

import User from '../models/User'
import UserService from '../services/user'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'
import logger from '../util/logger'

// POST /movies
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      birthDate,
      email,
      joinDate,
      password,
    } = req.body

    const user = new User({
      firstName,
      lastName,
      birthDate,
      email,
      joinDate,
      password,
    })

    const createdUser = await UserService.create(user)
    const token = JWT.sign(
      { id: createdUser._id },
      process.env.JWT_SECRET as string
    )
    res.send(token)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body

    const user = await UserService.findByEmail(email)

    if (user.password === password) {
      const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET as string)
      res.send(token)
    } else {
      res.send('naughty boy')
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

// PUT /movies/:movieId
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await UserService.update(userId, update)
    res.json(updatedUser)
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

// DELETE /users/:userId
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserService.deleteUser(req.params.userId)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

// GET /users/:userId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findById(req.params.userId))
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

// GET /users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    logger.info('trying to find users')

    res.json(await UserService.findAll())
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

// GET /loggrdInUser
export const findLoggedInUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(req.body.loggedInUser)
  } catch (error) {
    next(new NotFoundError('Logged in user not found', error))
  }
}
