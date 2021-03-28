import User, { UserDocument } from '../models/User'

function create(user: UserDocument): Promise<UserDocument> {
  return user.save()
}

function findById(userId: string): Promise<UserDocument> {
  return User.findById(userId)
    .exec() // .exec() will return a true Promise
    .then((user) => {
      if (!user) {
        throw new Error(`User ${userId} not found`)
      }
      return user
    })
}

async function findByEmail(email: string): Promise<UserDocument> {
  return User.findOne({ email: email })
    .exec() // .exec() will return a true Promise
    .then((user) => {
      if (!user) {
        throw new Error(`User ${email} not found`)
      }
      return user
    })
}

function findAll(): Promise<UserDocument[]> {
  return User.find().sort({ lastName: 1, birthDate: -1 }).exec() // Return a Promise
}

async function update(
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> {
  const user = await User.findById(userId).exec()
  if (!user) {
    throw new Error(`User ${userId} not found`)
  }
  if (update.lastName) {
    user.lastName = update.lastName
  }
  if (update.birthDate) {
    user.birthDate = update.birthDate
  }
  if (update.firstName) {
    user.firstName = update.firstName
  }
  return await user.save()
}

function deleteUser(userId: string): Promise<UserDocument | null> {
  return User.findByIdAndDelete(userId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteUser,
  findByEmail,
}
