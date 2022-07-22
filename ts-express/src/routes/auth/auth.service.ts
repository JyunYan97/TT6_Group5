import { userModel } from '../../mongo/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthFail, AuthSuccess } from './auth.model'

const login = async (
  email: string,
  password: string
): Promise<AuthSuccess | AuthFail> => {
  try {
    const existingUser = await userModel.findOne({ email })

    if (!existingUser)
      return { success: false, message: 'Email does not exist in DB' }

    const validPassword = await bcrypt.compare(
      password,
      existingUser.hashedPassword
    )
    if (!validPassword) return { success: false, message: 'Password incorrect' }

    const tokenPayload = { id: existingUser._id }
    const token = jwt.sign(tokenPayload, process.env.secretKey || 'secret', {
      expiresIn: '7d',
    })
    return { success: true, authToken: token }
  } catch (error) {
    // TODO: logging
    console.log(error)
    return { success: false, message: error }
  }
}

const register = async (
  email: string,
  password: string
): Promise<AuthSuccess | AuthFail> => {
  try {
    const existingUser = await userModel.findOne({ email })

    if (existingUser) return { success: false, message: 'Email already exist' }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword)

    const newUser = await userModel.create({
      email,
      hashedPassword,
    })
    console.log(newUser)

    const tokenPayload = { id: newUser._id }
    const token = jwt.sign(tokenPayload, process.env.secretKey || 'secret', {
      expiresIn: '7d',
    })
    return { success: true, authToken: token }
  } catch (error) {
    // TODO: logging
    console.log(error)
    return { success: false, message: error }
  }
}

export default { login, register }
