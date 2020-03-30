var mysql = require("mysql");
require("dotenv").config();

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE
  })
}
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: process.env.USER,
//   password: process.env.PASS,
//   database: process.env.DATABASE
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
