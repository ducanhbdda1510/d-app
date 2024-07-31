import { MetaMaskInpageProvider } from "@metamask/providers";
import { Web3 } from "web3";
import { RegisteredSubscription } from "web3-eth";

// todo: why it not work -> fix in types/index.ts
declare global {
  interface Window {
    ethereum?:MetaMaskInpageProvider;
    web3: Web3<RegisteredSubscription>;
  }
}
