const {generateToken} = require("../services/JWTService");
const {createUser, getUserByArgs} = require('../helpers/userHelper');

const REQUIRED = [
    'email',
    'username',
    'password'
];

const validate = (body, required = []) => {
    return !!Object.keys(body).length && Object.keys(body).every((field) => {
        if (!required.includes((field))) return false;
        if (typeof body[field] !== "string") return false;
        const value = body[field].trim();
        return !!value;
    });
};

module.exports = class AuthController {
    async signup (req, res, next) {
        const {body} = req;
        const  isValid = validate(body, REQUIRED);
        if (!isValid) {
            return res.status(400).json({
                status: 'error',
                data: 'Invalid Request Payload'
            })
        }

        try {
            const {email, username, password} = body;
            // TODO: Setup Mongoose query to support "or" searches
            const foundUser = await getUserByArgs({email});
            if (foundUser) {
                return res.status(400).json({
                    status: 'error',
                    data: 'User Already Exists'
                })
            }
            const user = await createUser({email, username, password});
            if (!user) {
                return res.status(400).json({
                    status: 'error',
                    data: 'Error Occurred while creating user'
                })
            }
            return res.status(200).json({
                status: 'success',
                data: {
                    ...user.toJSON(),
                    token: generateToken(email)
                }
            });
        } catch (e) {
           next(e);
        }
    }

    async login (req, res, next) {
        const {body} = req;
        const  isValid = validate(body, ['email', 'password']);
        if (!isValid) {
            return res.status(400).json({
                status: 'error',
                data: 'Invalid Request Payload'
            })
        }
        const {email, password} = body;
        const user = await getUserByArgs({email});
        if (!user) {
            return res.status(400).json({
                status: 'error',
                data: 'User Does not Exists'
            })
        }
        if (!user.validatePassword(password)) {
            return res.status(400).json({
                status: 'error',
                data: 'Invalid Password'
            })
        }
        return res.status(200).json({
            status: 'success',
            data: {
                ...user.toJSON(),
                token: generateToken(email)
            }
        });
    }
}
