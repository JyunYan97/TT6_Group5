import { Schema, model, Model } from 'mongoose'
import { WalletDocument } from './wallet.model'

const walletSchema = new Schema({
  walletId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

export const walletModel: Model<WalletDocument> = model('wallet', walletSchema)
