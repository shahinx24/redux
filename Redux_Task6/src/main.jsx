import { StrictMode } from 'react'
import ReactDOM from 'react'
import { Provider } from 'react-redux'
import store from './app/store.js'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
