let mysql = require('mysql');
require('dotenv').config({ path: './config.env' });
const dbhost = process.env.DBHOST;

let connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: '',
  database: process.env.DBNAME
})

connection.connect(function (err: any) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let createUserTables = `CREATE TABLE IF NOT EXISTS USERS(
    user_id INT AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
  )`;

  connection.query(createUserTables, (err: any, results: any, fields: any) => {
    if (err) { return console.log(err.message); }

    if (results){ console.log(results)}

    if (fields){ console.log(fields)}
  })
  let createSiteTables = `CREATE TABLE IF NOT EXISTS SITES(
    id INT AUTO_INCREMENT,
    sitename VARCHAR(255) NOT NULL,
    siteurl VARCHAR(255) NOT NULL,
    user_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
    )`;
    connection.query(createSiteTables, (err: any, results: any, fields: any) => {
      if (err) { return console.log(err.message); }

      if (results){ console.log(results)}

      if (fields){ console.log(fields)}
    })
});


// connection.end(function (err) {
//   if (err) {
//     return console.log(err.message);
//   }
// });

module.exports = {
  getConnection: () => (connection)
}