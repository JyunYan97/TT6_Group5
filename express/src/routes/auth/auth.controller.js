import { Router } from 'express'
import authService from './auth.service.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = Router()

router.post('/register', (req, res, next) => {
  try {
    // Find existing user in DB
    const existingUser = await User.findOne({ email });

    // Check if email already exists in DB
    if (existingUser) return res.status(400).json({ message: 'Email already exists!' });

    // Hash password before it saving in DB
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user in DB
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    const tokenPayload = { id: newUser._id };
    const token = jwt.sign(tokenPayload, secretKey, { expiresIn: '7d' });

    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).json({ newUser, token });
  } catch (error) {
    console.log(error);
  }
  const loginDto = req.body
  const result = authService.login()
  return res.status(201).json(loginDto)
})

router.post('/login', (req, res, next) => {})

export default router
