import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
    <App />
  </div>,
)
