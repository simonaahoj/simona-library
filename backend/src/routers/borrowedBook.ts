import express from 'express'

import {
  createBorrowedBook,
  findById,
  deleteBorrowedBook,
  findAll,
  updateBorrowedBook,
} from '../controllers/borrowedBook'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:borrowedBookId', findById)
router.put('/:borrowedBookId', updateBorrowedBook)
router.delete('/:borrowedBookId', deleteBorrowedBook)
router.post('/', createBorrowedBook)

export default router
