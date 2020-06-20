const {Router} = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();
const controller = new AuthController();

router.post('/register', controller.signup);
router.post('/login', controller.login);


module.exports = router;