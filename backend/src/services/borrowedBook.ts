import BorrowedBook, { BorrowedBookDocument } from '../models/BorrowedBook'

function create(
  borrowedBook: BorrowedBookDocument
): Promise<BorrowedBookDocument> {
  return borrowedBook.save()
}

function findById(idBook: string): Promise<BorrowedBookDocument> {
  return BorrowedBook.findById(idBook)
    .exec() // .exec() will return a true Promise
    .then((borrowedBook) => {
      if (!borrowedBook) {
        throw new Error(`Book ${idBook} not found`)
      }
      return borrowedBook
    })
}

function findByUserId(idUser: string): Promise<BorrowedBookDocument[]> {
  return BorrowedBook.find({ idUser: idUser })
    .exec() // .exec() will return a true Promise
    .then((borrowedBook) => {
      if (!borrowedBook) {
        throw new Error(`Book ${idUser} not found`)
      }
      return borrowedBook
    })
}

function update(
  idBook: string,
  update: Partial<BorrowedBookDocument>
): Promise<BorrowedBookDocument> {
  return BorrowedBook.findById(idBook)
    .exec()
    .then((borrowedBook) => {
      if (!borrowedBook) {
        throw new Error(`Movie ${idBook} not found`)
      }
      if (update.idUser) {
        borrowedBook.idUser = update.idUser
      }
      if (update.borrowDate) {
        borrowedBook.borrowDate = update.borrowDate
      }
      if (update.returnDate) {
        borrowedBook.returnDate = update.returnDate
      }

      // Add more fields here if needed
      return borrowedBook.save()
    })
}

function deleteBorrowedBook(
  idBook: string
): Promise<BorrowedBookDocument | null> {
  return BorrowedBook.findByIdAndDelete(idBook).exec()
}

function findAll(): Promise<BorrowedBookDocument[]> {
  return BorrowedBook.find().sort({ idUser: 1, idBook: -1 }).exec() // Return a Promise
}

export default {
  create,
  findAll,
  findById,
  update,
  deleteBorrowedBook,
  findByUserId
}
