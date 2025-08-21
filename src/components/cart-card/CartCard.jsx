import { useEffect } from 'react';

import './cartCard.css';

export default function CartCard(props) {
    function handleCartDelClick(e) {
        const products = [...props.cartItems];
        const cartCardId = e.target.parentElement.parentElement.id;


        for (let i = 0; i < products.length; i++) {
            if (cartCardId == `cart-card-${products[i].id}`) {
                products.splice(i, 1);
                props.setCartItems(products);
            } 
        }
    }

    return(
        <>
            {props.cartItems.map((cartItem) => (
                <div id={`cart-card-${cartItem.id}`} className='cart-card' key={cartItem.id}>
                    <div className="cart-card-product">
                        <div className="cart-card-product-img">
                            <img src={cartItem.image} alt="" />
                        </div>
                        <div className='cart-card-product-info'>
                            <div className='cart-card-product-info-details'>
                                <h3 className='cart-card-product-info-details-name'>{cartItem.name}</h3>
                                <h3>${cartItem.price}</h3>
                                <h3>Quantity: {cartItem.quantity}</h3>
                            </div>
                            <div className="cart-card-product-info-total-price">
                                <h2>Total Price: ${(cartItem.price * cartItem.quantity).toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="cart-card-btns">
                        <button className='cart-card-checkout-btn'>Checkout</button>
                        <button className='cart-card-del-btn' onClick={(e) => handleCartDelClick(e)}>Delete</button>
                    </div>
                </div>
            ))}
            
        </>
        
    );
};