const { verifyJwt } = require('../../config/authConfig');

const userAuthenticationMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];
    if (!authHeader || !verifyJwt(accessToken)) {
        return res.json({ error: 'unauthorized' });
    }

    return next();
};

module.exports = userAuthenticationMiddleware;
