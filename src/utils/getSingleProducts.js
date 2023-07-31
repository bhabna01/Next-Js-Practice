

const getSingleProducts = async (id) => {
    const res = await fetch(`http://localhost:500/products/${id}`, {
        cache: 'no-cache'
    })
    return res.json()

};

export default getSingleProducts;