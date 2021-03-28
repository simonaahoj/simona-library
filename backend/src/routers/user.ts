import express from 'express'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  updateUser,
  signIn,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.post('/mySignIn', signIn)
router.get('/:userId', findById)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/', createUser)

export default router
