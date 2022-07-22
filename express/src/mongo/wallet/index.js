import { Schema, model } from 'mongoose'

const walletSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
})

export const walletModel = model('wallet', walletSchema)
