import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothFollower from './component/SmoothFollower.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SmoothFollower/>
  </StrictMode>,
)
