const {createServer} = require('http');
const mongoose = require('mongoose');
const  {port, db} = require('./config');
const app = require('./src/app');

const server = createServer(app);

mongoose.connect(db, {useNewUrlParser: true,  useUnifiedTopology: true})
    .catch((err) => {
        console.log('DB Connection Error');
    });

mongoose.connection.on('connected', () => console.log('DB Connected'));
mongoose.connection.on('disconnected', () => console.log('DB Disconnected'));
mongoose.connection.on('error', (err) => {
    console.log('DB Error', err);
});

server.listen(port, (err) => {
    if (err) console.log(err);
    console.log('Application Initialized', {port});
});

