import './App.css'
import { BrowserRouter, Routes,Navigate, Route} from 'react-router-dom'
import ChatPage from './pages/ChatPage'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        {/* Default redirect to /chat */}
        <Route path="/" element={<Navigate to="/chat" replace />} />
        
        {/* Chat Page */}
        <Route path="/chat" element={<ChatPage />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<h1 className="text-center text-green-400 mt-20 font-mono">404 — Command not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}


