module.exports = {
    port: 4000,
    countryAPI: "https://restcountries.eu/rest/v2",
    jwt: {
        secret: 'dfhbdihhjifdhijdij',
        algorithm: 'HS256',
        expiresIn: '2h',
        claimProperty: 'email'
    },
    db: 'mongodb+srv://yobetuser:yobetuser@yobetit-jcmkn.mongodb.net/yobetit?retryWrites=true&w=majority'
};
