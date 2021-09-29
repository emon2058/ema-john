import React from 'react';
import './Products.css';
const Products = (props) => {
    // console.log(props);
    const {key,name,seller,category,stock,star,img,price}=props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p>by:{seller}</p> 
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="add-to-cart" onClick={() => props.addCart(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Products;