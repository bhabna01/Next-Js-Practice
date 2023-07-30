// 'use client'
import loadblogdata from '@/utils/loadblogdata';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
export const metadata = {
    title: 'Blogs|Next Hero',
    description: 'Next Hero',
}
// const blogs = [
//     {
//         id: 1,
//         year: 2016,
//         title: "title1"
//     },
//     {
//         id: 2,
//         year: 2016,
//         title: "title2"
//     },
//     {
//         id: 3,
//         year: 2016,
//         title: "title3"
//     },
//     {
//         id: 4,
//         year: 2016,
//         title: "title4"
//     },
// ]
const Blogpage = async () => {
    // const router = useRouter();
    const blogs = await loadblogdata()
    return (
        <div className='container mx-auto'>
            {
                blogs.map(({ id, body, title }) => (
                    <div key={id} className='border border-blue-500 p-2 my-2'>
                        <h1 className='text-2xl'>{id}. {title}</h1>
                        <p>{body}</p>
                        <Link className='inline-block mt-5 '
                            href={
                                `/blogs/${id}`}

                        ><button className='btn text-blue-500 px-2 py-1 bg-slate-500'>Details</button></Link>
                    </div>


                )
                )
            }
        </div>
    );
};

export default Blogpage;