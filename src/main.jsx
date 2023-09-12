import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { createStore } from 'redux';
import rootReducers from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";
// import store from './store'
const store = createStore(rootReducers, composeWithDevTools())
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>,
)
