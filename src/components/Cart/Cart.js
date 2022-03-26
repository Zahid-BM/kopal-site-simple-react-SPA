import React from 'react';

const Cart = ({ cartState }) => {
    let item = [];
    for (const addedItem of cartState) {
        item = [addedItem.name];
    }
    return (
        <div>
            <div>
                <h4>{item}</h4>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-success" type="button">Choose one for me</button>
                <button class="btn btn-warning" type="button">Button</button>
            </div>
        </div>
    );
};

export default Cart;