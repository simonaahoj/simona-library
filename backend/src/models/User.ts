/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  birthDate: Date
  email: string
  joinDate: Date
  imgUrl: string
  admin: boolean
  password: string
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: Date,
  email: String,
  joinDate: Date,
  imgUrl: String,
  admin: Boolean,
  password: String,
})

export default mongoose.model<UserDocument>('User', userSchema)
