import { Router } from 'express'
import { RequestWithUserId } from '../../middleware/authentication'
import walletService from './wallet.service'

const router = Router()

router.post('/', async (req: RequestWithUserId, res, next) => {
  const { name } = req.body
  const response = await walletService.createWallet(name, req.userId!)

  if (response.success) {
    return res.status(201).json(response.data)
  }
  // TODO: Handle exception better
  return res.status(400).json({ message: 'Something went wrong' })
})

export default router
