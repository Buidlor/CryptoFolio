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

function App() {
  return (
    <div className="content">
      <WagmiConfig client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
      </WagmiConfig>
    </div>
  )
}

export default App
