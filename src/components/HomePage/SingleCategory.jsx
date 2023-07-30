import Link from 'next/link';
import React from 'react';

const SingleCategory = ({ category }) => {
    const { id, name } = category
    return (
        <div>
            <Link href={`/products?categoryId=${id}`}>{name}</Link>
        </div>
    );
};

export default SingleCategory;