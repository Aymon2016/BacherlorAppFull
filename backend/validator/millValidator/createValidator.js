
const validator = require('validator')

const validate = mill => {
    let error = {}

    if (!mill.date) {
        error.date = 'Please Provide Date'
    }
    if (!mill.quantity) {
        error.quantity = "Please Provide Mill Quantity"
    }
    if (!mill.authorID) {
        error.authorID = 'Please Provide userName'
    }
    if (!mill.createAt) {
        error.createAt = 'Please Provide CreateAt Time'
    }
    if (!mill.userID) {
        error.userID = 'Please Provide UserID Date'
    }


    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate