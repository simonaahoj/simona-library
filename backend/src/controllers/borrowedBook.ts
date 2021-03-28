import { Request, Response, NextFunction } from 'express'

import BorrowedBook from '../models/BorrowedBook'
import BorrowedBookService from '../services/borrowedBook'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'
import logger from '../util/logger'

// POST /borrowBooks
export const createBorrowedBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body)

    const loggedInUser = req.body.loggedInUser as { _id: string }
    const idUser = loggedInUser._id
    const { idBook, borrowDate, returnDate } = req.body

    const borrowedBook = new BorrowedBook({
      idBook,
      idUser,
      borrowDate,
      returnDate,
    })

    await BorrowedBookService.create(borrowedBook)
    res.json(borrowedBook)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}
// PUT /movies/:movieId
export const updateBorrowedBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const borrowedBookId = req.params.borrowedBookId
    const updatedBorrowedBook = await BorrowedBookService.update(
      borrowedBookId,
      update
    )
    res.json(updatedBorrowedBook)
  } catch (error) {
    next(new NotFoundError('Book not found', error))
  }
}

// DELETE /movies/:movieId
export const deleteBorrowedBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BorrowedBookService.deleteBorrowedBook(req.params.borrowedBookId)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Book not found', error))
  }
}

// GET /movies/:movieId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BorrowedBookService.findById(req.params.idBook))
  } catch (error) {
    next(new NotFoundError('Book not found', error))
  }
}

// GET /movies
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const loggedInUser = req.body.loggedInUser as { _id: string }
    const idUser = loggedInUser._id
    logger.info('trying to find boorow books')

    res.json(await BorrowedBookService.findByUserId(idUser))
  } catch (error) {
    next(new NotFoundError('Books not found', error))
  }
}
