import React from 'react';

const SingleBlog = ({ params }) => {
    const [year, id] = params.segments || []
    return (
        <div>
            <h1>for {year} and {id}</h1>
        </div>
    );
};

export default SingleBlog;