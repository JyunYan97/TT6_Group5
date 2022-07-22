import { Schema, model, Model } from 'mongoose'
import { uuid } from 'uuidv4'
import { UserDocument } from './user.model'

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

export const userModel: Model<UserDocument> = model('users', userSchema)
