import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log('cart',props);
    const {cart}=props;
    let total=0;
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0)
    for(const product of cart){
        console.log('price : ',product.price);
        total = total + product.price
    }
    const shipping = 15;
    const tax = (shipping + total) / 5;
    return (
        <div className="cart">
            <h1>Order Summary</h1>
            <p>Items ordered : {cart.length}</p>
            <div>
                <p>Items : <span>${cart.length?total.toFixed(2) : '00'}</span> </p>
                <p>Shipping and Handling :  <span>${cart.length?shipping.toFixed(2):'00'}</span></p>
                <p>Total before tax :  <span>${total + shipping}</span></p>
                <p>Tax : <span>${cart.length?tax.toFixed(2):'00'}</span> </p>
                <p>Total : <span>${cart.length?(tax+shipping+total).toFixed(2):'00'}</span> </p>
            </div>
        </div>
    );
};

export default Cart;