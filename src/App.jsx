import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getItemLocalStorage } from './utils/localStorage';

import NavBar from './components/navigation-bar/NavBar';
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";

import './app.css';

export default function App() {
    const cartItemsLs = getItemLocalStorage('cartItemsLs');
    const [ cartItems, setCartItems ] = useState(cartItemsLs);

    return (
        <div className='app-content'>
            <NavBar cartItems={cartItems}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='shop' element={<Shop setCartItems={setCartItems} cartItems={cartItems}/>} />
                <Route path='cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
            </Routes>  
        </div>
    );
}