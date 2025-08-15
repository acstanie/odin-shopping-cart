import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavBar from './components/navigation-bar/NavBar';
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";

import './app.css';

export default function App() {
    const [ cartItems, setCartItems ] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', 
            {
                mode: 'cors',
            }
        )   
        .then(response => response.json())
        .then(data => {
            const products = [];

            for (let i = 0; i <= 2; i++) {
                const product = {
                    id: data[i].id,
                    name: data[i].title,
                    desc: data[i].description,
                    price: data[i].price,
                    image: data[i].image,
                };

                products.push(product);
            }

            setCartItems(products);
        });
    }, []);

    return (
        <div className='app-content'>
            <NavBar cartItems={cartItems}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='shop' element={<Shop setCartItems={setCartItems} cartItems={cartItems}/>} />
                <Route path='cart' element={<Cart cartItems={cartItems}/>} />
            </Routes>  
        </div>
    );
}