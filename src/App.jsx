import React, { useState } from 'react'
import Navbar from './components/N'
import Product from './components/Product'
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
import LoginSingup from './components/LoginSingup'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import N from './components/N'


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])


  return (
    <>
    <Router>
      <N/>
    {/* <Navbar cart={cart} setData={setData} /> */}

    
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/login" element={<LoginSingup/>}/>
       <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>

   
  <Footer/>
    </Router>
    
    </>
  )
}

export default App
