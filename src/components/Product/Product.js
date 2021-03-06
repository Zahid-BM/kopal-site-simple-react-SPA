import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Product = ({ productItems, addBtnHandler }) => {
    const { img, name, price } = productItems;
    return (

        <div className="card mx-3" style={{ width: "15rem" }}>
            <img src={img} className="card-img-top rounded mt-2" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Price : $ {price}</h6>
                <button onClick={() => addBtnHandler(productItems)} className="btn btn-primary w-100" type="button">Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;