import { ethers } from "ethers";
import Web3 from "web3";
import { getBlockNumber } from "web3-eth";

const getWeb3 = async () => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  if (!1 && window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      //   await window.ethereum.enable();

      const accounts = await window.ethereum // Or window.ethereum if you don't support EIP-6963.
        .request({ method: "eth_requestAccounts" })
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error.
            // If this happens, the user rejected the connection request.
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        });

      console.log("rq acc", accounts);
      // Acccounts now exposed
      return web3;
    } catch (error) {
      console.error(error);
    }
  }
  // Legacy dapp browsers...
  else if (!1 && window.web3) {
    // Use Mist/MetaMask's provider.
    const web3 = window.web3;
    console.log("Injected web3 detected.");
    return web3;
  }
  // Fallback to localhost; use dev console port by default...
  else {
    const blockAccessToken = "2a270e02685144fdb052bc4a6dc4d034";
    const blockLink = `https://go.getblock.io/${blockAccessToken}/`;
    const provider = new Web3.providers.HttpProvider(blockLink);
    await provider.request({ method: "eth_requestAccounts" }).catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error.
        // If this happens, the user rejected the connection request.
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
    const web3 = new Web3(provider);
    web3.eth.getBlockNumber().then(console.log);

    console.log("acc tesst ", web3.eth.accounts.create());

    const acc = web3.eth.accounts.create();
    const a = web3.eth.accounts.wallet.add(acc);
    web3.eth.accounts.wallet;
    web3.wallet && web3.wallet;

    // if (web3.wallet) {
    //   web3.wallet.add(acc);
    //   const wallet = web3.wallet;
    //   wallet[0]

    //   console.log(wallet);
    // }

    const mnemonic = ethers.Mnemonic.fromPhrase(ethers.randomBytes(8).toString())
    console.log(ethers.HDNodeWallet.fromMnemonic(mnemonic));
    console.log("No web3 instance injected, using Local web3.");
    return web3;
  }
};

const getMetamask = async () => {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    
    // MetaMask requires requesting permission to connect users accounts
   await  provider.send("eth_requestAccounts",[]);
    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
  } else {
    const blockAccessToken = "2a270e02685144fdb052bc4a6dc4d034";
    const JsonRpcUrl = `https://go.getblock.io/${blockAccessToken}/`;

    const provider = new ethers.JsonRpcProvider(JsonRpcUrl)

    // Get write access as an account by getting the signer
    const signer =  await provider.getSigner()

  }
};

export default getWeb3;
