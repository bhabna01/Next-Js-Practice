import loadblogdata from "@/utils/loadblogdata";
import loadsingleblogdata from "@/utils/loadsingleblogdata";
export const generateMetadata = async ({ params }) => {
    const { id, title, body } = await loadsingleblogdata(params.id)

    return {
        title: title,
    }
}
export const generateStaticParams = async () => {
    const blogs = await loadblogdata();
    return blogs.map(({ id }) => {
        id
    })

}

const SingleBlog = async ({ params }) => {
    const { id, title, body } = await loadsingleblogdata(params.id)

    return (
        <div className="border border-blue-500 p-2 my-2">
            <h2 className="text-2xl">
                {id}. {title}
            </h2>
            <p>{body}</p>

        </div>
    );
};

export default SingleBlog;