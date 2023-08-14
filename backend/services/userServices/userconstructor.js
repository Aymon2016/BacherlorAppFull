

class Users {

    /**
     * Users constructor will receive userID name , email  and password
     * @param {string} userID
     * @param {string} name
     * @param {string} email 
     * @param {string} role 
     * @param {password} password
     */

    constructor(userID, name, email, password, role) {
        this.userID = userID
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role
    }
}

module.exports = Users;