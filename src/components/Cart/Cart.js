import React from 'react';

const Cart = ({ cartState, againBtnHandler }) => {
    // let item = [];
    // for (const addedItem of cartState) {
    // const newItem = [...item, addedItem.name];
    // item = newItem;



    return (
        <div>
            {
                cartState.map(addedItem => <p>{addedItem.name}</p>)
            }
    
            <div className="d-grid gap-2">
                <button class="btn btn-success" type="button">Choose one for me</button>
                <button onClick={againBtnHandler} class="btn btn-warning" type="button">Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;