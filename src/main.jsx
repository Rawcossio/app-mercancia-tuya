import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelControl from './pages/PanelControl'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl />
  </StrictMode>,
)
