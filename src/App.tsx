import { useState } from "react";
import "./App.css";
import { walletCsvWriterMapping, WalletInfo } from "./utils/csv";
import { randomMetamaskWallet } from "./utils/etherum";
import { CSVLink } from "react-csv";

function App() {
  const [wallets, setWallets] = useState<WalletInfo[]>([]);
  const generate100WalletAndWriteCsv = () => {
    const mappedWallets = Array(30)
      .fill(1)
      .map(randomMetamaskWallet)
      .map(walletCsvWriterMapping);
    
      setWallets(mappedWallets);
  };

  const renderWalletRowTable = (wallet: WalletInfo, key: string) => {
    return (
      <tr key={key + wallet.address}>
        <td>{key}</td>
        <td>{wallet.address}</td>
        <td>{wallet.privateKey}</td>
        <td>{wallet.phrase}</td>
      </tr>
    );
  };

  const renderWalletInfo = (wallets: WalletInfo[]) => {
    return (
      <>
        <div className="card">
          <table style={{ width: "max-content" }}>
            <tr>
              <th>No</th>
              <th>Address</th>
              <th>Private Key</th>
              <th>Phrase</th>
            </tr>
            {wallets.map((w, i) => renderWalletRowTable(w, i + ""))}
          </table>
        </div>
        <p className="read-the-docs">
          <CSVLink data={wallets}>Click here to download</CSVLink>
        </p>
      </>
    );
  };

  return (
    <>
      <div>
        <h1>Metamask</h1>
        <button onClick={generate100WalletAndWriteCsv}>generate Wallet</button>
      </div>
      {wallets.length > 0 && renderWalletInfo(wallets)}
    </>
  );
}

export default App;
