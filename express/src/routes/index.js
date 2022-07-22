import Router from 'express'
import authRouter from './auth/auth.controller.js'

const router = Router()

router.use('/auth', authRouter)

export default router
