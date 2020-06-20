const {v4} = require('uuid');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports.createUser = (args) => {
    const {username, password, email} = args;
    const saltRounds = 10;
    let _id = v4();
    return bcrypt.hash(password, saltRounds)
        .then(hash => User.create({_id, username, email, password: hash}))
};

module.exports.getUserById = (id) => {
    return User.findById(id)
        .then(user => {
            if (user) {
                return user
            }
            return false
        })
};

module.exports.getUserByArgs = (args) => {
    return User.findOne(args)
        .then(user => {
            if (user) {
                return user
            }
            return false
        })
};

module.exports.findUsersByArgs = (args) => {
    return User.find(args)
        .then(users => {
            if (users) {
                return users
            }
            return false
        })
};

module.exports.getAllUsers = () => {
    return User.find({})
        .select('username email')
        .then((users) => users)
};