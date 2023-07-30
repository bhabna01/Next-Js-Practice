

const getAllCategories = async () => {
    const res = await fetch("http://localhost:500/categories",)
    return res.json()

};

export default getAllCategories;