const CountryService = require('../services/CountryService');

const service = new CountryService();

class CountryController {

    async getAll (req, res, next) {
        try {
            const {data, error} = await service.getAllCountries();
            if (error) return next(error)
            return res.status(200).json({
                status: 'success',
                data: data
            });
        } catch (e) {
            return next(e);
        }
    }

    async getCountry (req, res, next) {
        const {params} = req;
        try {
            const name = params.name.trim();
            if (!name) {
                return res.status(200).json({
                    status: 'error',
                    data: 'Invalid Country Name'
                });
            }
            const {data, error} = await service.getCountryByName(name);
            if (error) return next(error);
            return res.status(200).json({
                status: 'success',
                data: data
            });
        } catch (e) {
            return next(e);
        }
    }
}

module.exports = CountryController;