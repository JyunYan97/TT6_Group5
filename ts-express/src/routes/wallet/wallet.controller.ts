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

router.get('/', async (req: RequestWithUserId, res) => {
  const response = await walletService.getAllWallets(req.userId!)

  if (response.success) {
    return res.status(200).json(response.data)
  }
  // TODO: Handle exception better
  return res.status(400).json({ message: 'Something went wrong' })
})

router.delete('/:walletId', async (req, res) => {
  const response = await walletService.deleteWallet(req.params.walletId)

  if (response.success) {
    return res
      .status(200)
      .json({ message: `Successfully delete wallet of ${req.params.walletId}` })
  }
  // TODO: Handle exception better
  return res.status(400).json({ message: 'Something went wrong' })
})

export default router
