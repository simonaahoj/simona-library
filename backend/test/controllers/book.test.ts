import request from 'supertest'

import Book, { BookDocument } from '../../src/models/Book'
import app from '../../src/app'
import * as dbHelper from '../db-helper'
import { Schema } from 'mongoose'

const nonExistingBookId = '5e57b77b5744fa0b461c7900'

async function createBook(override?: Partial<BookDocument>) {
    let book = {
        title: 'Angrybirds 22',
        published: new Date(1500000),
        categories: ['classic', 'fantasy'],
        pages: 120,
        idAuthor: '234',
        imgUrl: 'dffdfiofjoofaifiojfoaoj'
    }

    if (override) {
        book = { ...book, ...override }
    }

    return await request(app).post('/api/v1/books').send(book)
}

describe('book controller', () => {
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
        const res = await createBook()
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('_id')
        expect(res.body.title).toBe('Angrybirds 22')
    })

    it('should not create a book with wrong data', async () => {
        const res = await request(app)
            .post('/api/v1/books')
            .send({
                //  title: 'Angrybirds 22',
                published: 2001,
                pages: 732,
                categories: ['classc', 'funny'],
                // idAuthor: 858599595959,
                imgUrl: 'string'
            })
        expect(res.status).toBe(400)
    })

    it('should get back an existing book', async () => {
        let res = await createBook()
        expect(res.status).toBe(200)

        const bookId = res.body._id
        res = await request(app).get(`/api/v1/books/${bookId}`)

        expect(res.body._id).toEqual(bookId)
    })

    it('should not get back a non-existing book', async () => {
        const res = await request(app).get(`/api/v1/books/${nonExistingBookId}`)
        expect(res.status).toBe(404)
    })

    it('should get back all book', async () => {
        const res1 = await createBook({
            title: 'Angrybirds 12',
            published: new Date(500000),
        })
        const res2 = await createBook({
            title: 'Angrybirds 22',
            published: new Date(500000),
        })

        const res3 = await request(app).get('/api/v1/books')

        expect(res3.body.length).toEqual(2)
        expect(res3.body[0]._id).toEqual(res1.body._id)
        expect(res3.body[1]._id).toEqual(res2.body._id)
    })

    it('should update an existing book', async () => {
        let res = await createBook()
        expect(res.status).toBe(200)

        const bookId = res.body._id
        const update = {
            title: 'Angrybirds 12',
            published: new Date(500000),
        }

        res = await request(app).put(`/api/v1/books/${bookId}`).send(update)

        expect(res.status).toEqual(200)
        expect(res.body.title).toEqual('Angrybirds 12')
        expect(res.body.published).toEqual(new Date(500000).toISOString())
    })

    it('should delete an existing book', async () => {
        let res = await createBook()
        expect(res.status).toBe(200)
        const bookId = res.body._id

        res = await request(app).delete(`/api/v1/books/${bookId}`)

        expect(res.status).toEqual(204)

        res = await request(app).get(`/api/v1/books/${bookId}`)
        expect(res.status).toBe(404)
    })
})
