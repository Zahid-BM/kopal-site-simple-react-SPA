import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Product = ({ productItems, addBtnHandler }) => {
    const { img, name, price } = productItems;
    return (
        <div>
            <div className="card h-100" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top rounded" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Price : $ {price}</h6>
                    <button onClick={() => addBtnHandler(productItems)} class="btn btn-primary w-100" type="button">Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;