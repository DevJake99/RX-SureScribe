const jwt = require(‘jsonwebtoken’);
const secret = ‘mysecretssshhhhhhh’;
const expiration = ‘2h’;
module.exports = {
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
        // [“Bearer”, “<tokenvalue>“]
        if (req.headers.authorization) {
            token = token.split(' ’).pop().trim();
    }
        if (!token) {
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log(`Auth Error: ${err.message}`);
        }
        return req;
    },
    signToken: function ({ }) {
        const payload = {};
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};