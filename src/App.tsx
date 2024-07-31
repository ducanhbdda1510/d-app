import "./App.css";
import { EIP6963ProviderDetail } from "@metamask/providers";
import { useSyncProviders } from "./hooks/useSyncProviders";
import { web3Connect } from "./action/web3Connect";
import getWeb3 from "./utils/web3";
// import { web3Connect } from "./action/web3Connect";

function App() {
  const providers = useSyncProviders();

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      const accounts = (await providerWithInfo.provider.request({
        method: "eth_requestAccounts",
      })) as string[];
      console.log(accounts)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h2>
        Wallets Detected:{" "}
        <button
          onClick={() => {
            console.log("in");
            web3Connect();

            // getWeb3()
          }}
        >
          dfghjk
        </button>
      </h2>
      <div className="providers">
        {providers.length > 0 ? (
          providers?.map((provider: EIP6963ProviderDetail) => (
            <button
              key={provider.info.uuid}
              onClick={() => handleConnect(provider)}
            >
              <img src={provider.info.icon} alt={provider.info.name} />
              <div>{provider.info.name}</div>
            </button>
          ))
        ) : (
          <div>No Announced Wallet Providers</div>
        )}
      </div>
    </div>
  );
}

export default App;
