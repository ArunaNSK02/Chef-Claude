import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/custom.css'
import { ProgressProvider } from '@bprogress/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </StrictMode>,
)
