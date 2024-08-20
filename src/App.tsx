import {useState} from "react";
import { generateMnemonic } from "bip39";
import SolanaWallet from "./components/SolanaWallet.tsx";
import EthWallet from "./components/EthWallet.tsx";


const App = () => {
    const [mnemonic, setMnemonic] = useState<string|null>(null);
    const handleClick = async () => {
      const generatedMnemonic  =  await generateMnemonic();
        setMnemonic(generatedMnemonic);
    }
    return (
        <div>
            <button onClick={handleClick}>Generate mnemonic</button>
            <p>{mnemonic}</p>
            {mnemonic && <SolanaWallet mnemonic={mnemonic}/>}
            {mnemonic && <EthWallet mnemonic={mnemonic}/>}
        </div>
    );
};

export default App;