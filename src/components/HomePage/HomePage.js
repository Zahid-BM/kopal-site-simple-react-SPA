import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './HomePage.css'

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 12)))
    }, []);
    const addBtnHandler = item => {
        const newcart = [...cart, item];
        setCart(newcart);
    };
    const againBtnHandler = () => {
        setCart([]);
    }
    return (

        <div className='home-page'>

            <div className="product-container">

                {
                    items.map(item => <Product key={item.id} productItems={item} addBtnHandler={addBtnHandler}></Product>)
                }
            </div>

            <div className="cart-container">
                <h3 className='mb-5 mt-3'>Selected items</h3>
                <Cart cartState={cart} againBtnHandler={againBtnHandler} ></Cart>
            </div>
        </div>
    );
};

export default HomePage;