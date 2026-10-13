import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './style.css'
import './accessibility.css'
import App from './App.tsx'

hydrateRoot(document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
