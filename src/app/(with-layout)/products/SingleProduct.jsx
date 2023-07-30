import React from 'react';

const SingleProduct = ({ product }) => {
    const { id, name, price } = product
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SingleProduct;