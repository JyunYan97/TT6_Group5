import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'
import { userModel } from './user'
import { walletModel } from './wallet'

dotenv.config()

const DATABASE_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017'
console.log(DATABASE_URL)
const connectDb: () => Promise<Mongoose> = () => {
  return mongoose.connect(DATABASE_URL)
}

// import model dependencies and put them inside here
export const models = { userModel, walletModel }

export { connectDb }
