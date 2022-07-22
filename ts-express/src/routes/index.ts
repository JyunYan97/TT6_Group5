import Router from 'express'
import authenticateJWT from '../middleware/authentication'
import authRouter from './auth/auth.controller'
import walletRouter from './wallet/wallet.controller'

const router = Router()

router.use('/auth', authRouter)
router.use('/wallet', authenticateJWT, walletRouter)

export default router
