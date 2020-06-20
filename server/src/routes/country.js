const {Router} = require('express');
const CountryController = require('../controllers/CountryController');

const router = Router();
const controller = new CountryController();

router.get('/', controller.getAll);
router.get('/:name', controller.getCountry);


module.exports = router;