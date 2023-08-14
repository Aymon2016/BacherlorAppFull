
const productCollection = require('../../services/productServices/productServices')
const getUserProductController = async (req, res) => {

    const { userID } = req.params;

    try {

        const product = await productCollection.findByUserID(userID)
        if (product.length === 0) {
            return res.status(404).json({ message: 'Product Not Found' })
        } else {
            return res.status(200).json({
                message: 'Product Found',
                products: product
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }


};
module.exports = getUserProductController