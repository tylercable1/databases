var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected to database!');
  //now you can start querying the database using SQL statements
});

module.exports = connection;