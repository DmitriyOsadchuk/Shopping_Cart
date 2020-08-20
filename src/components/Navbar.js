import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper nav-bg">
                <div className="container">
                    <Link to="/" className="brand-logo">SHOPPING</Link>
                    
                    <ul className="right">
                        <li className="go-shop"><Link to="/">SHOP</Link></li>
                        <li className="go-cart"><Link to="/cart">CART</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;