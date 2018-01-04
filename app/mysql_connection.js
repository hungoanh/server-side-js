const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'hle',
  password: 'passw0rd',
  database: "jsproject"
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected");
  let sql_statement = "SELECT * FROM identity WHERE userid = 'hle' AND password = 'ne0n'"; 
  conn.query(sql_statement, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
});
