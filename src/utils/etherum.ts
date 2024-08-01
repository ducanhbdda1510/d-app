import { Wallet } from "ethers";

export const randomMetamaskWallet = () => {
 return Wallet.createRandom()
};
