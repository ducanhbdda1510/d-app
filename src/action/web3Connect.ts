import getWeb3 from "../utils/web3";

export const WEB3_CONNECT = 'WEB3_CONNECT';
export const web3Connect = async () => {
    console.log("in");
  const web3 = await getWeb3();
  console.log("success web3");
   if(!web3) {
    console.log("Web3 can not get");
    return;
   };
   console.log("get acc");
//   const accounts = await web3.eth.requestAccounts();
const accounts = await web3.eth.personal.newAccount("1");

  // todo: debug later
//   if (web3.currentProvider.connection.networkVersion !== '3') {
//     alert('Unknown network, please change network to Ropsten network');
//     return;
//   }
console.log("acc ", accounts)
  if (accounts.length > 0) {
    const account = accounts[0];
    let balance = await web3.eth.getBalance(account);
    console.log("success ", balance)
    // dispatch({
    //   type: WEB3_CONNECT,
    //   web3,
    //   account
    // });
  } else {
    console.log('Account not found');
  }
};

export const createMetamaskWallet = () => {

}