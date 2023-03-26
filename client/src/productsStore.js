const productsArray = [
    {
        id: "price_1MpjMMCCfVRJgqGQCJhh8DoC",
        title: "Coffee",
        price: 6.99
    },
    {
        id: "price_1MpjMyCCfVRJgqGQ3SoZmwyp",
        title: "Sunglasses",
        price: 21.99
    },
    {
        id: "price_1MpjNSCCfVRJgqGQmAECH81o",
        title: "Camera",
        price: 54.99
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist for id:" + id)
        return undefined;
    }

    return productData
}

export { productsArray, getProductData }