const jwt = require('jsonwebtoken');
const {jwt: {secret, algorithm, claimProperty, expiresIn}} = require('../../config');

module.exports.generateToken = (claim, subject = 'user') => {
    return jwt.sign({[claimProperty]: claim}, secret, {
        algorithm,
        expiresIn,
        subject
    })
};

module.exports.verifyToken = (token, subject = 'user') => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, {
            algorithm,
            maxAge: expiresIn,
            subject: subject
        }, (err, payload) => {
            if (err) {
                return reject(err)
            }
            return resolve(payload)
        })
    })
};