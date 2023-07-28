'use client'

import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({ params, searchParams }) => {
    const [year, id] = params.segments || []
    const params2 = useParams()
    const searchParams2 = useSearchParams()
    return (
        <div>
            <h1>for {year} and {id}</h1>
            <br />
            {searchParams.title}
        </div>
    );
};

export default SingleBlog;