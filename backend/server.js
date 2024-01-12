const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import the cors middleware

const app = express();

app.use(cors()); // Enable CORS for all routes

const db = mysql.createPool({
  host: 'localhost',
  user: 'deviel_daniel',
  password: ']*FVl{cFI-LM',
  database: 'deviel_my-finances',
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
});

app.get('/user', (req, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log('listening...');
});
