import { createObjectCsvWriter } from "csv-writer";
import { HDNodeWallet } from "ethers/wallet";


type WalletInfo = {
    address: string,
    privateKey: string,
    secretRecoveryPhrase: string
}
export  const  walletCsvWriter = (wallets: WalletInfo[]) =>{
    // Create CSV writer
const csvWriter = createObjectCsvWriter({
    path: 'wallets.csv',
    header: [
      {id: 'address', title: 'Address'},
      {id: 'privateKey', title: 'Private Key'},
      {id: 'mnemonic', title: 'Recovery Phrase'}
    ]
  });
// Write wallets to CSV
csvWriter.writeRecords(wallets)
  .then(() => console.log('CSV file has been written successfully'))
  .catch((err) => console.error('Error writing CSV file', err));
}

export  const  walletCsvWriterMapping = (wallet: HDNodeWallet): WalletInfo => {
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        secretRecoveryPhrase: wallet.mnemonic ? wallet.mnemonic.phrase : '',
    }
}
