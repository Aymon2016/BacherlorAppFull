

const userCollection = require('../../services/userServices/userServices')


const GetUserController = async (req, res) => {


    try {

        const users = await userCollection.find()

        if (users.length === 0) {
            return res.status(404).json({
                message: 'User Not Found'
            })
        }

        return res.status(200).json({
            message: 'User found sucessfull',
            users: users

        })

    } catch (error) {
        return res.status(500).json({ message: 'Server error' })
    }





};
module.exports = GetUserController



