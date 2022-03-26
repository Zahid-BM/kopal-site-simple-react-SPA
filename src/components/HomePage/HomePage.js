import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const HomePage = () => {
    const [items, setItems] = useState([]); /* to show products/items on UI */
    const [cart, setCart] = useState([]); /* for cart item display on UI */
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
            /* now try here to print a message for warning if time available*/
        }

    };
    const againBtnHandler = () => { /* to clear cart for another trial */
        setCart([]);
    };
    const chooseBtnHandler = () => {
        const random = cart[Math.floor(Math.random() * cart.length)]?.name ?? 'No item in the cart'; /* generate random item name */
        alert(random);



    };
    return (

        <div className='home-page container mb-5'>


            <div className='row'>
                <div className='col-9'>
                    <div className="product-container">
                        <div className='row row-cols-3 g-4 '>
                            {
                                items.map(item => <Product key={item.id} productItems={item} addBtnHandler={addBtnHandler}></Product>)
                            }
                        </div>
                    </div>
                </div>
                <div className="cart-container col-3">

                    <Cart cartState={cart} againBtnHandler={againBtnHandler} chooseBtnHandler={chooseBtnHandler}></Cart>
                </div>

            </div>
        </div>



    );
};

export default HomePage;