


const shortid = require('shortid')

class Mill {


    /**
     * Users constructor will receive  date, quantity, userName, createAt, userID
     * @param {string} date
     * @param {number} quantity,
     * @param {number} authorID,
     * @param {number} createAt
     * @param {string}  userID
     */

    constructor(date, quantity, authorID, createAt, userID) {

        this.id = shortid.generate();
        this.date = date;
        this.quantity = quantity;
        this.authorID = authorID;
        this.createAt = createAt;
        this.userID = userID;

    }
}

module.exports = Mill;