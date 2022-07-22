import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { walletModel } from './user/index.js'

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'
console.log(DATABASE_URL)
const connectDb = () => {
  return mongoose.connect(DATABASE_URL)
}

// import model dependencies and put them inside here
export const models = { walletModel }

export { connectDb }
