import { Schema } from 'mongoose'
import Book from '../../src/models/Book'
import BookService from '../../src/services/book'
import * as dbHelper from '../db-helper'

const nonExistingBookId = '5e57b77b5744fa0b461c7906'

async function createBook() {
    const book = new Book({
        title: 'Shrek 3',
        published: new Date(500000),
        categories: ['Classic'],
        pages: 90,
        idAuthor: '213e',
        imgUrl: 'jfljdaljaljklafj;fj'
    })
    return await BookService.create(book)
}

describe('book service', () => {
    beforeEach(async () => {
        await dbHelper.connect()
    })

    afterEach(async () => {
        await dbHelper.clearDatabase()
    })

    afterAll(async () => {
        await dbHelper.closeDatabase()
    })

    it('should create a book', async () => {
        const book = await createBook()
        expect(book).toHaveProperty('_id')
        expect(book).toHaveProperty('title', 'Shrek 3')
        expect(book).toHaveProperty('pages', 90)
    })

    it('should get a book with id', async () => {
        const book = await createBook()
        const found = await BookService.findById(book._id)
        expect(found.title).toEqual(book.title)
        expect(found._id).toEqual(book._id)
    })

    // Check https://jestjs.io/docs/en/asynchronous for more info about
    // how to test async code, especially with error
    it('should not get a non-existing book', async () => {
        expect.assertions(1)
        return BookService.findById(nonExistingBookId).catch((e) => {
            expect(e.message).toMatch(`Book ${nonExistingBookId} not found`)
        })
    })

    it('should update an existing book', async () => {
        const book = await createBook()
        const update = {
            title: 'Shrek',
            published: new Date(500000),
        }
        const updated = await BookService.update(book._id, update)
        expect(updated).toHaveProperty('_id', book._id)
        expect(updated).toHaveProperty('title', 'Shrek')
        expect(updated).toHaveProperty('published', new Date(500000))
    })

    it('should not update a non-existing book', async () => {
        expect.assertions(1)
        const update = {
            title: 'Shrek',
            published: new Date(500000),
        }
        return BookService.update(nonExistingBookId, update).catch((e) => {
            expect(e.message).toMatch(`Book ${nonExistingBookId} not found`)
        })
    })

    it('should delete an existing book', async () => {
        expect.assertions(1)
        const book = await createBook()
        await BookService.deleteBook(book._id)
        return BookService.findById(book._id).catch((e) => {
            expect(e.message).toBe(`Book ${book._id} not found`)
        })
    })
})
