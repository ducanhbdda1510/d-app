import { HDNodeWallet } from "ethers/wallet";

export type WalletInfo = {
    address: string,
    privateKey: string,
    phrase: string
}

export  const  walletCsvWriterMapping = (wallet: HDNodeWallet): WalletInfo => {
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        phrase: wallet.mnemonic ? wallet.mnemonic.phrase : '',
    }
}
