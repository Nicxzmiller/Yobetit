const axios = require('axios');
const {countryAPI} = require('../../config');

module.exports = class CountryService {

    constructor () {
        this.request = axios.create({
            baseURL: countryAPI
        })
    }

    _call (fn) {
        return async (...args) => {
            const response = {
                data: null,
                error: null
            };
            try {
                const {data} = await fn(...args);
                response.data = data;
            } catch (e) {
                console.error(e);
                response.error = e;
            }
            return response;
        }
    }

    get (...args) {
        return this._call(this.request.get)(...args);
    }

    async getCountryByName (name) {
        return this.get(`/name/${name}`);
    }

    async getAllCountries () {
        return this.get('/all');
    }
}