import React from 'react';
import './Cart.css'

const Cart = ({ cartState, againBtnHandler, chooseBtnHandler }) => {
    // let item = [];
    // for (const addedItem of cartState) {
    // const newItem = [...item, addedItem.name];
    // item = newItem;



    return (
        <div className='sticky-top'>
            <h3 className='mb-5 mt-3'>Selected items</h3>
            {
                cartState.map(addedItem => <p key={addedItem.id}> <img className='cart-img' src={addedItem.img} alt="" /> {addedItem.name}</p>)
            }

            <div className="d-grid gap-2">
                <button onClick={chooseBtnHandler} className="btn btn-success" type="button">Choose one for me</button>
                <button onClick={againBtnHandler} className="btn btn-warning" type="button">Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;