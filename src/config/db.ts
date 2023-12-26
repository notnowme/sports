export {}
const mysql = require("mysql2");
require('dotenv').config();
let db;

try {
    db = mysql.createConnection({
        user : process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB
});
}
 catch (err) {
    console.log('db 연동 실패')
    console.error(err);
}


module.exports = db;