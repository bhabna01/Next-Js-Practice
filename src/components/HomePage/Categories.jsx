import getAllCategories from '@/utils/getAllCategories';
import React from 'react';

import SingleCategory from './SingleCategory';

const Categories = async () => {
    const categories = await getAllCategories()
    console.log(categories);

    return (
        <div className="mt-10 px-2">
            <h1 className="text-2xl font-medium mb-5">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    categories.map((category) => <SingleCategory key={category.id} category={category}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;
