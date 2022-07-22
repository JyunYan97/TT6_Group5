import { uuid } from 'uuidv4'
import { walletModel } from '../../mongo/wallet'
import { WalletFailure, WalletSuccess } from './wallet.model'

const createWallet = async (
  name: string,
  userId: string
): Promise<WalletSuccess | WalletFailure> => {
  try {
    const walletDoc = await walletModel.create({
      walletId: uuid(),
      userId,
      name,
    })

    if (!walletDoc)
      return { success: false, message: 'Error in creating wallet' }

    return { success: true, data: walletDoc }
  } catch (error) {
    // TODO: logging
    console.log(error)
    return { success: false, message: error }
  }
}

const getAllWallets = async (
  userId: string
): Promise<WalletSuccess | WalletFailure> => {
  try {
    const walletDocs = await walletModel.find({
      userId,
    })
    return { success: true, data: walletDocs }
  } catch (error) {
    // TODO: logging
    console.log(error)
    return { success: false, message: error }
  }
}

const deleteWallet = async (
  walletId: string
): Promise<WalletSuccess | WalletFailure> => {
  try {
    const res = await walletModel.deleteOne({
      walletId,
    })

    if (res.deletedCount === 0)
      return { success: false, message: 'Error in deleting wallet' }

    return { success: true, data: null }
  } catch (error) {
    // TODO: logging
    console.log(error)
    return { success: false, message: error }
  }
}

export default { createWallet, getAllWallets, deleteWallet }
