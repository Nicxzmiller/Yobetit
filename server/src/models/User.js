const mongoose = require('mongoose');
const {v4} = require('uuid');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
let userSchema = new Schema({
    _id: {
        type: String,
        default: v4
    },
    username: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        trim: true,
        index: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        dropDups: true,
        trim: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'last_updated'
    }
});

// Do not declare methods using ES6 arrow functions

userSchema.methods.validatePassword = function (rawPassword) {
    return bcrypt.compareSync(rawPassword, this.password)
};

userSchema.set('toJSON', {
    transform: function (doc, ret, opt) {
        delete ret['password'];
        delete ret['__v'];
        return ret
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;