const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async (req, res, next) => {
    try {

        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: 'Authorization token not provided' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ email: decodedToken.email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
        
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
