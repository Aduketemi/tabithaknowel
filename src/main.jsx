import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContactModal } from "./components/shared/ContactModal"
import { ModalProvider } from './contexts/ContactContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <App />
      <ContactModal />
    </ModalProvider>
  </StrictMode>,
)
