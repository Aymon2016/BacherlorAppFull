
class UserInfo {


    constructor() {

    }


    async totalCost(array) {

        let totalCost = 0

        for (let i = 0; i < array.length; i++) {

            totalCost = totalCost + parseFloat(array[i].price);
        }
        return totalCost;

    }

    async totalMill(array) {


        let totalMill = 0

        for (let i = 0; i < array.length; i++) {

            totalMill = totalMill + parseFloat(array[i].quantity);
        }
        return totalMill;

    }

}

const userinfo = new UserInfo();

module.exports = userinfo
