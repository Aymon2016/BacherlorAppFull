const jwt = require("jsonwebtoken");
const userCollection = require('../../services/userServices/userServices')

const AuthenticateController = async (req, res) => {
    const secretKey = process.env.SECRET_KEY;
    // Get the JWT token from the request headers or cookies
    let token = req.headers.authorization;
    token = token.split(" ")[1]

    console.log(token)

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const verifyToken = jwt.verify(token, secretKey);
        const user = await userCollection.findById(verifyToken.userID);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        return res.status(200).json({ message: 'Authenticated Successfully' });
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }





};
module.exports = AuthenticateController