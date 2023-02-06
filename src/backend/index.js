const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = process.env.PORT || 3001

app.use(express.urlencoded({extended: true}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lbmz0204!',
  database: 'us_angular'
});

app.get("/api", (req, res) => {
  connection.query(
    'SELECT * FROM `userInf`',
    function(err, results, fields) {
      if(err) {
        console.log("接続終了(異常)");
        throw err;
      }
//      results.forEach(elment => res.json({message: elment}));
      res.json(results);
    }
  );
  console.log("接続終了(正常)");
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})