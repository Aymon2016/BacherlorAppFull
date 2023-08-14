const millCollection = require('../../services/millServices/millServices')
const productCollection = require('../../services/productServices/productServices')
const userCollection = require('../../services/userServices/userServices')
const userinfo = require('../../services/userServices/userInfoServices')

const userInfo = async (req, res) => {
    const { userID } = req.params;

    try {

        const isValidUserId = await userCollection.findById(userID)
        if (isValidUserId.length === 0) {
            return res.status(404).json({
                message: 'User Not Found'
            })
        }

        const allProduct = await productCollection.find()
        const userProduct = await productCollection.findByUserID(userID)

        const allMill = await millCollection.find()
        const userMill = await millCollection.findByAuthorID(userID)

        const selfMill = await millCollection.findByUserID(userID)

        const totalCost = await userinfo.totalCost(allProduct);
        const totalMill = await userinfo.totalMill(allMill);


        const userTotalCost = await userinfo.totalCost(userProduct)
        const userTotalMill = await userinfo.totalMill(userMill)

        const selfTotalMill = await userinfo.totalMill(selfMill)

        let giveTaka = 0;
        let getTaka = 0;
        if (userTotalCost < totalCost / totalMill * selfTotalMill) {
            giveTaka = totalCost / totalMill * selfTotalMill - userTotalCost
        } else {
            getTaka = userTotalCost - totalCost / totalMill * selfTotalMill
        }


        return res.status(200).json({
            message: 'User Info found sucessfull',
            data: {
                totalCost: totalCost,
                totalMill: totalMill,
                eachMill: totalCost / totalMill,
                user: {
                    userID: userID,
                    userTotalCost: userTotalCost,
                    userTotalMill: userTotalMill,
                    userEachMill: userTotalCost / userTotalMill,
                    status: userTotalCost / userTotalMill > 35 ? 'Bad' : 'Good',
                    self: {
                        selfTotalMill: selfTotalMill,
                        selfTotalCost: totalCost / totalMill * selfTotalMill,
                        getTaka: getTaka,
                        giveTaka: giveTaka,
                    },
                }

            }
        })

    } catch (error) {
        return res.status(500).json({ message: 'Server error' })
    }





};
module.exports = userInfo



