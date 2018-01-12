const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hle',
    password: 'passw0rd',
    database: 'jsproject'
});

module.exports = connection;
