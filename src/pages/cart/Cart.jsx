import CartCard from '../../components/cart-card/CartCard';

import './cart.css';

export default function Cart(props) {

    if (props.cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className='cart-page-heading'>
                    <h1>No Items in Cart</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="cart-page">
            <div className='cart-page-heading'>
                <h1>Items in Cart</h1>
            </div>
            <CartCard 
                cartItems={props.cartItems} 
                setCartItems={props.setCartItems} />
        </div>
    )
}