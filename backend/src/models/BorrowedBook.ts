/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type BorrowedBookDocument = Document & {
  id: string | undefined
  idBook: string
  idUser: string
  borrowDate: Date
  returnDate: Date
}

const borrowedBookSchema = new mongoose.Schema({
  id: String,
  idBook: {
    type: String,
    index: true,
  },
  idUser: {
    type: String,
    required: true,
  },
  borrowDate: Date,
  returnDate: Date,
})

export default mongoose.model<BorrowedBookDocument>(
  'BorrowedBook',
  borrowedBookSchema
)
