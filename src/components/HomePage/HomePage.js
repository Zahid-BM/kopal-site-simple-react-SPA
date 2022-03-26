import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './HomePage.css'

const HomePage = () => {
    const [items, setItems] = useState([]); /* to show products/items on UI */
    const [cart, setCart] = useState([]); /* for cart item display on UI */
    const [randomItems, setRandomItems] = useState([]); /* for random item choose */
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 12)))
    }, []);
    const addBtnHandler = item => {
        const newcart = [...cart, item];
        /* set up to 4 items can be added */
        if (newcart.length <= 4) {
            setCart(newcart)
        }
        else {
            setCart(cart)
            /* now try here to print a message for warning */
        }
    };
    const againBtnHandler = () => { /* to clear cart for another trial */
        setCart([]);
    };
    const chooseBtnHandler = () => {
        const random = cart[Math.floor(Math.random() * cart.length)].name; /* generate random item name */
        console.log(random);
    };
    return (

        <div className='home-page'>

            <div className="product-container">

                {
                    items.map(item => <Product key={item.id} productItems={item} addBtnHandler={addBtnHandler}></Product>)
                }
            </div>

            <div className="cart-container">

                <Cart cartState={cart} againBtnHandler={againBtnHandler} chooseBtnHandler={chooseBtnHandler}></Cart>

            </div>
        </div>
    );
};

export default HomePage;