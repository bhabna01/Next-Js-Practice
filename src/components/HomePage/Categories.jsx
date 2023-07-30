import getAllCategories from '@/utils/getAllCategories';
import React from 'react';

import SingleCategory from './SingleCategory';

const Categories = async () => {
    const categories = await getAllCategories()
    console.log(categories);

    return (
        <div>
            <h1>Categories</h1>
            {
                categories.map((category) => <SingleCategory key={category.id} category={category}></SingleCategory>)
            }
        </div>
    );
};

export default Categories;
