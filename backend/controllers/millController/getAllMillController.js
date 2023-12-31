

const millCollection = require('../../services/millServices/millServices')


const getAllMillController = async (req, res) => {


    try {

        const allMill = await millCollection.find()
        await allMill.sort((a, b) => a.userID.localeCompare(b.userID));
        return res.status(200).json({
            message: 'Mill successfully retrieved',
            allMill: allMill
        })

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }


};
module.exports = getAllMillController