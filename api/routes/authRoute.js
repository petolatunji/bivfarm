import express from 'express'
import {
  register,
  login,
  logout,
  resetPassword,
} from '../controllers/authCont.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.put('/update', resetPassword)

export default router
