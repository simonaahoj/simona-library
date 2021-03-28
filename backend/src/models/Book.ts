/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type BookDocument = Document & {
  id: string | undefined
  title: string
  published: Date
  categories: string[]
  pages: number
  idAuthor: string
  imgUrl: string
  ISBN: number
  description: string
  copies: []
}

const bookSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    index: true,
    required: true,
  },
  published: {
    type: Date,
    required: true,
  },
  categories: [String],
  pages: {
    type: Number,
  },
  idAuthor: {
    type: String,
  },

  imgUrl: String,

  ISBN: Number,
  description: String,
  copies: Array,
})

export default mongoose.model<BookDocument>('Book', bookSchema)
