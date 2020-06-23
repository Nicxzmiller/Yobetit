import axios from 'axios';

export class BackendService {

    constructor () {
        this.request = axios.create({
            baseURL: 'http://localhost:4000',
            validateStatus: false
        });
    }

    _call (fn) {
        return async (...args) => {
            const response = {
                data: null,
                error: null
            };
            try {
                const {data} = await fn(...args);
                if (data.status !== 'success') throw new Error(data.data);
                response.data = data;
            } catch (e) {
                console.error(e);
                response.error = e;
            }
            return response;
        }
    }

    post (...args) {
        return this._call(this.request.post)(...args);
    }

    get (...args) {
        return this._call(this.request.get)(...args);
    }

    async login (data = {}) {
        return this.post('/user/login', data, {headers: {'Content-Type': 'application/json'}});
    }

    async register (data = {}) {
        return this.post('/user/register', data, {headers: {'Content-Type': 'application/json'}});
    }

    async getAllCountries (token) {
        return this.get('/countries/all', {headers: {'Authorization': token}})
    }

    async getByName (name, token) {
        return this.get(`/countries/${name}`, {headers: {'Authorization': token}})
    }
}