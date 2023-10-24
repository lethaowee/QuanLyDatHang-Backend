var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Codnumber1',
    database: 'quanlydathang'
});

module.exports = connection;