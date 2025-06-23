import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { StoreProvider } from './context/StoreContext.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreProvider>
    <App />
  <ToastContainer/>
  </StoreProvider>
  </BrowserRouter>
)

