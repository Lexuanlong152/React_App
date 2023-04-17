import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Cart() {
    const selector = useSelector(state => state);
    const dispath = useDispatch();
    const products = selector.products;
    const cartProducts = selector.cartProducts;

    function addToCart(id) {
        let isInCart = false;
        cartProducts.forEach(el => {
            if (id === el.id) isInCart = true;
        });
        if (!isInCart) {
            console.log('add to cart')
            dispath({ type: "ADD_TO_CART", payload: products.find(product => id === product.id) })

        }
        alert('Product added to Cart')

    }
    return (
        <div className="productList">
            {products.map(item =>
                <div className="product" key={item.id}>
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <span>Color: {item.color}</span>

                    <div className="priceBlocks">
                        <span className="productPrice">{item.price}$</span>
                        <button onClick={() => addToCart(item.id)}>Buy</button>
                    </div>

                </div>
            )}

        </div>
    )
}