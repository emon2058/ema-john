import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =useState([]);
    const [cart,setCart]=useState([]);
    const addToCart = (product) =>{
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        
    }
    useEffect(() => {
        // fetch("../../fakeData/products.JSON")
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data=>setProducts(data));
        },[])
    return (
        <div className="shop-container">
            <div className="product-container">
            {products.map(product => <Products
                key={product.key}
                product={product}
                addCart={addToCart}
            ></Products>
            )}
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;