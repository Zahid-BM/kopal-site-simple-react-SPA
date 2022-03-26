import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './HomePage.css'

const HomePage = () => {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 12)))
    }, [])
    return (

        <div className='home-page'>
        
                <div className="product-container">

                    {
                        items.map(item => <Product key={item.id} productItems={item}></Product>)
                    }
                </div>
           
            <div className="cart-container">
                <h3>This is Cart container</h3>

            </div>
        </div>
    );
};

export default HomePage;