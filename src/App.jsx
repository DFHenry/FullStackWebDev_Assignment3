//import { useState } from 'react'

import './App.css';
import './assets/font/CarnevaleeFreakshow.ttf';

//component imports
import Banner from "./components/banner";
import NavBar from './components/navBar';
import Hero from './components/hero';
import Footer from './components/footer';
import Product from './components/props/product/product.jsx';

//react router imports
import Home from '../pages/Home';
import About from '../pages/About';
import { BrowserRouter, Routes, Route } from 'react-router';
import ProductList from './components/ProductList';
import ProductDetails from '../pages/ProductDetails';
import ServicesList from './components/ServiceList';
import ServiceDetails from '../pages/ServiceDetails/index.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Banner />
      
        <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="productDetails" element={<ProductDetails />} />
            <Route path="serviceDetails" element={<ServiceDetails />} />
          </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
