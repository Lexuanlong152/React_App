import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css"


export default function Cart() {

    const selector = useSelector(state => state);
    const dispath = useDispatch();
    const cartProducts = selector.cartProducts;

    function removeProduct(id) {
        dispath({ type: "REMOVE_FROM_CART", payload: id })
    }

    function incrementProduct(id) {
        dispath({ type: "INCREMENT_PRODUCT", payload: { id, increment: 1 } })
    }

    function decrementProduct(id, inCart) {
        inCart <= 1 ? removeProduct(id) : dispath({ type: "DECREMENT_PRODUCT", payload: { id, increment: 1 } })
    }

    console.log(cartProducts)
    console.log(selector)

    return (
        <div className="cart">
            {cartProducts.length > 0 ? cartProducts.map(item =>
                <div className="cartItem">
                    <div className="cartItemImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cartItemInfo">
                        <h3>{item.name}</h3>
                        <span>Color:{item.color}</span>
                    </div>
                    <div className="cartItemQuantity">
                        <button onClick={() => incrementProduct(item.id)}>+</button>
                        <span>{item.inCart}</span>
                        <button onClick={() => decrementProduct(item.id, item.inCart)}>-</button>
                    </div>
                    <div className="cartItemPrice">
                        <h3>{item.price}$</h3>
                        <span>Total:{item.price * item.inCart}$</span>
                    </div>
                    <div className="cartItemRemove">
                        <button onClick={removeProduct(item.id)}>
                            <img className="removeLogo" src="https://w7.pngwing.com/pngs/698/202/png-transparent-computer-icons-icon-design-remove-save-icon-format-miscellaneous-trademark-logo.png" alt="" />
                        </button>
                    </div>
                </div>
            ) : <h2>Cart Is Empty</h2>}
        </div>
    )
}