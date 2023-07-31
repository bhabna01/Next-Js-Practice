import getSingleProducts from '@/utils/getSingleProducts';
import React from 'react';

const SingleProductPage = async ({ params }) => {
    const product = await getSingleProducts(params.id)
    return (
        <div>
            {product.title}
        </div>
    );
};

export default SingleProductPage;