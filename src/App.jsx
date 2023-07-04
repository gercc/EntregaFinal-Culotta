import React from 'react';
import ItemPage from './Pages/ItemPage/ItemPage';
import CartPage from './Pages/CartPage/CartPage'
import HomePage from './Pages/HomePage/HomePage';
import ProductCategoryPage from './Pages/ProductCategoryPage/ProductCategoryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar';
import CartContextProvider from './components/CartContext/CartContext';


export default function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className='App'>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/product-category/:category" element={<ProductCategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartContextProvider>
  );
}
