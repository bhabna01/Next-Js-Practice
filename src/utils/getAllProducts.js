

const getAllProducts = async (categoryID) => {
    let url = "http://localhost:500/products"
    if (categoryID) {
        url += "?categoryID=" + categoryID
    }
    const res = await fetch(url, {
        cache: "no-cache"
    })
    return res.json()

};

export default getAllProducts;