import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Landing from './pages/Landing'
import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { arbitrum } from "wagmi/chains";

const { provider, webSocketProvider } = configureChains([arbitrum], [publicProvider(), ]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
})

interface AppProps {
  handleAuth: () => Promise<void>;
}


function App({ handleAuth }:AppProps): React.ReactElement {
  return (
    <div className="content">
      <WagmiConfig client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing handleAuth = {handleAuth}/>} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
      </WagmiConfig>
    </div>
  )
}

export default App
