import './App.css';
import './scss/app.scss';
import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Routes, Route } from "react-router-dom";
// import pizzas from './assets/pizzas.json'

function App() {



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
