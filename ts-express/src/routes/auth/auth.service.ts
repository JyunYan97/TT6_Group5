import { userModel } from '../../mongo/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthFail, AuthSuccess } from './auth.model'
import JwtPayloadType from '../../utils/jwtpayload.type'
import { uuid } from 'uuidv4'
import configuration from '../../config/configuration'

const login = async (
  username: string,
  password: string
): Promise<AuthSuccess | AuthFail> => {
  try {
    const existingUser = await userModel.findOne({ username })
    console.log(existingUser)
    if (!existingUser)
      return { success: false, message: 'username does not exist in DB' }

    const validPassword = await bcrypt.compare(
      password,
      existingUser.hashedPassword
    )
    if (!validPassword) return { success: false, message: 'Password incorrect' }

    const tokenPayload: JwtPayloadType = { userId: existingUser.userId }
    const token = jwt.sign(tokenPayload, configuration().secretKey, {
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
  username: string,
  password: string,
  name: string
): Promise<AuthSuccess | AuthFail> => {
  try {
    const existingUser = await userModel.findOne({ username })
    console.log(existingUser)
    if (existingUser)
      return { success: false, message: 'username already exist' }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = await userModel.create({
      userId: uuid(),
      username,
      hashedPassword,
      name,
    })
    console.log(newUser)

    const tokenPayload: JwtPayloadType = { userId: newUser.userId }
    const token = jwt.sign(tokenPayload, configuration().secretKey, {
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
