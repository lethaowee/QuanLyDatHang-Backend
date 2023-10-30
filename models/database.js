var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'quanlydathang'
});

module.exports = connection;