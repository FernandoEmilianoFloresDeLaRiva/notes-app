import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IndexProvider } from './redux/IndexProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IndexProvider />
  </StrictMode>,
)
