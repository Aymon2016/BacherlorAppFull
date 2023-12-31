


const createValidator = require('../../validator/millValidator/createValidator')
const getFullDate = require('../../utilis/getFullDate')
const millCollection = require('../../services/millServices/millServices')


const createMillController = async (req, res) => {

    let { date, quantity, authorID, userID } = JSON.parse(req.body.body)

    const createAt = await getFullDate()

    let validate = createValidator({ date, quantity, authorID, createAt, userID })

    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {

        try {

            const haveMill = await millCollection.findByDateUserID(date, userID)
            console.log(haveMill)

            if (haveMill.length !== 0) {
                return res.status(400).json({ message: 'Already Add  Mill' })
            }

            const mill = await millCollection.create(date, quantity, authorID, createAt, userID)
            return res.status(200).json({
                message: 'Mill Created Successfull',
                mill: mill
            })

        } catch (error) {
            return res.status(500).json({ message: 'something went wrong', error: error })
        }
    }



};
module.exports = createMillController