import React from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import '../index.css'



export default function Header() {

    const selector = useSelector(state => state);
    const dispath = useDispatch();
    const cartProducts = selector.cartProducts;
    return (
        <header id="header">
            <NavLink to="/products">
                <img className="siteLogo" src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png" alt="" />
            </NavLink>
            <form className="search">
                <input type="text" placeholder="search" />
                <button>Accept</button>

            </form>

            <div className="cartLink">
                <img className="cartLink" src="https://banner2.cleanpng.com/20180705/azf/kisspng-shopping-cart-software-computer-icons-shopping-icon-5b3eb003bbc062.574139001530834947769.jpg" alt="" />
                <NavLink to="/cart">Cart</NavLink>
                <span>{cartProducts.length}</span>
            </div>
        </header>
    )
}