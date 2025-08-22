import { Link } from 'react-router-dom';

import './navBar.css';

export default function NavBar(props) {
    
    return(
        <>
            <nav>
                <ul className="nav-bar">
                    <div className="nav-logo">
                        <li>
                            <Link to='/'>ShopFirsT</Link>
                        </li>
                    </div>

                    <div className="nav-links">
                        <li className='nav-shop-link'>
                            <Link to="shop">Shop</Link>
                        </li>
                        <li className='nav-cart-link'>
                            <Link to="cart">Cart <span className='nav-cart-indicator'>{props.cartItems.length}</span></Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}