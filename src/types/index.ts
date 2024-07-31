import { MetaMaskInpageProvider } from "@metamask/providers";
import { Web3 } from "web3";
import { RegisteredSubscription } from "web3-eth";


declare global {
  interface Window {
    ethereum?:MetaMaskInpageProvider;
    web3: Web3<RegisteredSubscription>;
  }
}
