import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import UserContainer from './context/UserContainer.jsx';
import './index.css'
import ProductsContainer from "./context/ProductsContainer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContainer>
      <ProductsContainer>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContainer>
    </UserContainer>
  </React.StrictMode>,
);
