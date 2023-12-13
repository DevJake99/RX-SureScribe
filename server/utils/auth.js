const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const { GraphQLError } = require('graphql');
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
        // [“Bearer”, “<tokenvalue>“]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
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
    signToken: function ({ userType, firstName, lastName, email, _id }) {
        const payload = { userType, firstName, lastName, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    getUserFromToken: async function (token) {
        try {
            if (token) {
                const token = jwt.verify(token, process.env.JWT_SECRET) || secret;
                const user = await User.findById(_id);
                return { token, user }
            }
            return null;
        } catch (err) {
            return null;
        }
    }
};