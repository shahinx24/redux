import { StrictMode } from 'react'
import ReactDom from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store.js"
import './index.css'
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={ store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
