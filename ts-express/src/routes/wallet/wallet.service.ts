import { uuid } from 'uuidv4'
import { walletModel } from '../../mongo/wallet'
import { WalletFailure, WalletSuccess } from './wallet.model'

const createWallet = async (
  name: string,
  userId: string
): Promise<WalletSuccess | WalletFailure> => {
  try {
    console.log(userId)
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

export default { createWallet }
