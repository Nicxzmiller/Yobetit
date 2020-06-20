const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {countryRouter, userRouter} = require('./routes');

const app = express();

app.disable('x-powered-by');
app.use(morgan('combined'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/countries', countryRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    return res.status(404).json({
        status: 'error',
        data: 'Not Found'
    });
});

app.use((error, req, res, next) => {
    const {message, stack} = error;
    return res.status(500).json({
       status: 'error',
       data: message,
       stack
    });
});

module.exports = app;