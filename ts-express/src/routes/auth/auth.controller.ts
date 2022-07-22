import { Router } from 'express'
import authService from './auth.service'

const router = Router()

router.post('/register', async (req, res, next) => {
  const { username, password, name } = req.body
  const response = await authService.register(username, password, name)

  if (response.success) {
    return res
      .status(201)
      .json({ message: 'successful register', authToken: response.authToken })
  }
  // TODO: Handle exception better
  return res.status(400).json({ message: 'Something went wrong' })
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  const response = await authService.login(username, password)
  if (response.success) {
    return res
      .status(201)
      .json({ message: 'successful login', authToken: response.authToken })
  }
  // TODO: Handle exception better
  return res.status(400).json({ message: 'Something went wrong' })
})

export default router
