


const arryToObjMill = (array) => {
    const quantityMap = {};

    for (let i = 0; i < array.length; i++) {
        const { userID, quantity } = array[i];
        if (quantityMap[userID]) {
            quantityMap[userID] += parseInt(quantity);
        } else {
            quantityMap[userID] = parseInt(quantity);
        }
    }
    return quantityMap
}

const arryToObjProduct = (array) => {
    const quantityMap = {};

    for (let i = 0; i < array.length; i++) {
        const { userID, price } = array[i];
        if (quantityMap[userID]) {
            quantityMap[userID] += parseInt(price);
        } else {
            quantityMap[userID] = parseInt(price);
        }
    }
    return quantityMap
}
module.exports = {
    arryToObjMill,
    arryToObjProduct
}