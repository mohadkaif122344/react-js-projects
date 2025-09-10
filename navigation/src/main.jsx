import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './pages/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </ThemeProvider>
);


