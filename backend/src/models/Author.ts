/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type AuthorDocument = Document & {
  city: string
  counry: string
  birthDate: Date
  firstName: string
  lastName: string
  imgUrl: string
  biography: string
  died: Date
}

const authorSchema = new mongoose.Schema({
  city: String,
  country: String,
  birthDate: Date,
  firstName: String,
  lastName: String,
  imgUrl: String,
  biography: String,
  died: Date,
})

export default mongoose.model<AuthorDocument>('Author', authorSchema)
