import { Router } from 'express'
import authService from './auth.service'

const router = Router()

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  const response = await authService.login(email, password)

  if (response.success) {
    res.status(200).json(response.authToken)
  }
  // TODO: Handle exception better
  res.status(400).json({ message: 'Something went wrong' })
})

router.post('/register', async (req, res, next) => {
  const { email, password } = req.body
  console.log(email, password)
  const response = await authService.register(email, password)

  if (response.success) {
    res.status(200).json(response.authToken)
  }
  // TODO: Handle exception better
  res.status(400).json({ message: 'Something went wrong' })
})

export default router
