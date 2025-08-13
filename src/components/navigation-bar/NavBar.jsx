import { Link } from 'react-router-dom';

import './navBar.css';

export default function NavBar() {
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
                        <li>
                            <Link to="shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="cart">Cart</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}