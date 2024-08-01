import { ethers, Wallet } from "ethers";

export const randomMetamaskWallet = () => {
    console.log("issd", ethers.Mnemonic)
  const mnemonic = ethers.Mnemonic.fromPhrase("ds");

  console.log(mnemonic)
  return ethers.HDNodeWallet.fromMnemonic(mnemonic);

//   return  Wallet.fromPhrase("phare");

};
