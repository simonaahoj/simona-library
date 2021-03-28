import express from 'express'

import { findLoggedInUser } from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findLoggedInUser)

export default router
